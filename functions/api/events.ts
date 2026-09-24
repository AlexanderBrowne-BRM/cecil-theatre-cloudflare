type Database = {
  prepare(sql: string): {
    bind(...values: unknown[]): { run(): Promise<unknown> };
  };
};

type Context = { request: Request; env: { DB?: Database } };

const permittedEvents = new Set([
  'show_page_view', 'ticket_alert_submit', 'ticket_link_click',
  'friday_ticket_click', 'saturday_ticket_click', 'get_involved_submit',
  'accessibility_contact_click', 'partner_source',
]);
const permittedMetadataKeys = new Set(['performance', 'interests']);

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function onRequestPost({ request, env }: Context): Promise<Response> {
  const contentLength = Number(request.headers.get('content-length') || '0');
  if (contentLength > 4_000) return Response.json({ ok: false }, { status: 413 });

  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const name = clean(body.name, 64);
  if (!permittedEvents.has(name)) return Response.json({ ok: false }, { status: 400 });
  if (!env.DB) return Response.json({ ok: false }, { status: 503 });

  const pathname = clean(body.pathname, 160) || '/';
  const source = clean(body.source, 120) || null;
  const metadata = body.metadata && typeof body.metadata === 'object'
    ? Object.fromEntries(Object.entries(body.metadata)
      .filter(([key]) => permittedMetadataKeys.has(key))
      .map(([key, value]) => [key, clean(value, 160)]))
    : {};

  try {
    await env.DB.prepare(
      'INSERT INTO analytics_events (id, name, pathname, source, metadata, created_at) VALUES (?, ?, ?, ?, ?, ?)',
    ).bind(crypto.randomUUID(), name, pathname, source, JSON.stringify(metadata), Date.now()).run();
    return Response.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Analytics event failed', error);
    return Response.json({ ok: false }, { status: 503 });
  }
}
