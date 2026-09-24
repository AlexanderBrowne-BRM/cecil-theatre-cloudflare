'use client';

import { useEffect } from 'react';

type ToolDefinition = {
  name: string;
  title?: string;
  description: string;
  inputSchema: object;
  annotations?: { readOnlyHint?: boolean; untrustedContentHint?: boolean };
  execute(input: unknown): unknown;
};

declare global {
  interface Document {
    readonly modelContext?: {
      registerTool(
        tool: ToolDefinition,
        options?: { signal?: AbortSignal },
      ): void | Promise<void>;
    };
  }
}

const allowedInterests = [
  'Little Shop ticket alert',
  'Future productions',
  'Auditions and artist calls',
  'Volunteer opportunities',
] as const;

function validate(input: unknown) {
  if (!input || typeof input !== 'object')
    throw new Error('Input must be an object.');
  const value = input as Record<string, unknown>;
  const firstName =
    typeof value.firstName === 'string' ? value.firstName.trim() : '';
  const email = typeof value.email === 'string' ? value.email.trim() : '';
  const interests = Array.isArray(value.interests)
    ? value.interests.filter(
        (item): item is (typeof allowedInterests)[number] =>
          typeof item === 'string' &&
          allowedInterests.includes(item as (typeof allowedInterests)[number]),
      )
    : [];

  if (!firstName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('A first name and valid email address are required.');
  }
  if (interests.length === 0)
    throw new Error('Choose at least one supported interest.');
  if (value.consent !== true)
    throw new Error('Explicit email consent is required.');
  return { firstName, email, interests };
}

export function WebMcpTools() {
  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();

    const tool: ToolDefinition = {
      name: 'join_ctp_updates',
      title: 'Join Cecil Theatre Project updates',
      description:
        'Add a person to the Cecil Theatre Project email list for selected ticket, production, audition, or volunteer updates after explicit consent.',
      inputSchema: {
        type: 'object',
        properties: {
          firstName: { type: 'string', minLength: 1, maxLength: 80 },
          email: { type: 'string', format: 'email', maxLength: 254 },
          interests: {
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: { type: 'string', enum: allowedInterests },
          },
          consent: { type: 'boolean', const: true },
        },
        required: ['firstName', 'email', 'interests', 'consent'],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      async execute(input) {
        const fields = validate(input);
        const response = await fetch('/api/forms', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            kind: 'newsletter',
            ...fields,
            consent: true,
            source: 'webmcp',
          }),
        });
        const result = (await response.json()) as {
          ok?: boolean;
          message?: string;
        };
        if (!response.ok || !result.ok)
          throw new Error(result.message || 'The signup could not be saved.');
        window.dispatchEvent(
          new CustomEvent('ctp:track', {
            detail: { name: 'ticket_alert_submit' },
          }),
        );
        return { status: 'subscribed', interests: fields.interests };
      },
    };

    try {
      void Promise.resolve(
        context.registerTool(tool, { signal: lifecycle.signal }),
      ).catch((error) => {
        console.error('WebMCP registration failed', error);
      });
    } catch (error) {
      console.error('WebMCP registration failed', error);
    }

    return () => lifecycle.abort();
  }, []);

  return null;
}
