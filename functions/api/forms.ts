type Database = {
  prepare(sql: string): {
    bind(...values: unknown[]): { run(): Promise<unknown> };
  };
};

type Context = { request: Request; env: { DB?: Database } };

const involvementInterests = new Set([
  'Perform', 'Direct', 'Design', 'Build/Tech', 'Teach', 'Volunteer',
]);
const newsletterInterests = new Set([
  'Little Shop ticket alert', 'Future productions',
  'Auditions and artist calls', 'Volunteer opportunities',
]);

function textValue(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function selections(value: unknown, allowed: Set<string>): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string' && allowed.has(item))
    : [];
}

function reply(body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}

export async function onRequestPost({ request, env }: Context): Promise<Response> {
  const contentLength = Number(request.headers.get('content-length') || '0');
  if (contentLength > 16_000) {
    return reply({ ok: false, message: 'That submission is too large.' }, 413);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return reply({ ok: false, message: 'We could not read that submission. Please try again.' }, 400);
  }

  // A hidden field on the public forms absorbs automated submissions.
  if (textValue(body.website, 200)) return reply({ ok: true });

  const kind = textValue(body.kind, 32);
  const email = textValue(body.email, 254).toLowerCase();
  const consent = body.consent === true;
  const source = textValue(body.source, 120) || 'website';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !consent) {
    return reply({ ok: false, message: 'Enter a valid email address and confirm the consent checkbox.' }, 400);
  }

  if (!env.DB) {
    return reply({ ok: false, message: 'The form is temporarily unavailable. Please email info@ceciltheatreproject.org instead.' }, 503);
  }

  const id = crypto.randomUUID();
  const createdAt = Date.now();
  try {
    if (kind === 'newsletter') {
      const firstName = textValue(body.firstName, 80);
      const interests = selections(body.interests, newsletterInterests);
      if (!firstName || interests.length === 0) {
        return reply({ ok: false, message: 'Add your first name and choose at least one interest.' }, 400);
      }
      await env.DB.prepare(
        'INSERT INTO newsletter_signups (id, first_name, email, interests, consent, source, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
      ).bind(id, firstName, email, JSON.stringify(interests), 1, source, createdAt).run();
      return reply({ ok: true, message: 'You’re on the list. Watch your inbox for Cecil Theatre Project updates.' });
    }

    if (kind === 'involvement') {
      const name = textValue(body.name, 120);
      const interests = selections(body.interests, involvementInterests);
      if (!name || interests.length === 0) {
        return reply({ ok: false, message: 'Add your name and choose at least one way to get involved.' }, 400);
      }
      await env.DB.prepare(
        'INSERT INTO involvement_submissions (id, name, email, location, interests, experience, availability, accommodations, consent, source, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      ).bind(
        id, name, email, textValue(body.location, 160) || null,
        JSON.stringify(interests), textValue(body.experience, 1500) || null,
        textValue(body.availability, 800) || null,
        textValue(body.accommodations, 800) || null, 1, source, createdAt,
      ).run();
      return reply({ ok: true, message: 'Thanks—your interest was received. The CTP team will follow up by email.' });
    }

    return reply({ ok: false, message: 'That form type is not supported.' }, 400);
  } catch (error) {
    console.error('Form submission failed', error);
    return reply({ ok: false, message: 'We couldn’t save your submission. Please email info@ceciltheatreproject.org instead.' }, 503);
  }
}
