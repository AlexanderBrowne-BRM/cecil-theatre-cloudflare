'use client';

import { type SyntheticEvent, useState } from 'react';
import Link from '@/components/site-link';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

const options = [
  'Little Shop ticket alert',
  'Future productions',
  'Auditions and artist calls',
  'Volunteer opportunities',
];

export function NewsletterForm({
  compact = false,
  buttonLabel = 'Get the ticket alert',
}: {
  compact?: boolean;
  buttonLabel?: string;
}) {
  const [interests, setInterests] = useState<string[]>([
    'Little Shop ticket alert',
  ]);
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');

  function toggle(label: string, checked: boolean) {
    setInterests((current) =>
      checked
        ? [...new Set([...current, label])]
        : current.filter((item) => item !== label),
    );
  }

  async function submit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('submitting');
    setMessage('');

    try {
      const params = new URLSearchParams(window.location.search);
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'newsletter',
          firstName: data.get('firstName'),
          email: data.get('email'),
          interests,
          consent: data.get('consent') === 'on',
          website: data.get('website'),
          source: params.get('utm_source') ?? 'website',
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };
      if (!response.ok || !result.ok)
        throw new Error(result.message || 'Please try again.');
      setStatus('success');
      setMessage(result.message || 'You’re on the list.');
      form.reset();
      setInterests(['Little Shop ticket alert']);
      window.dispatchEvent(
        new CustomEvent('ctp:track', {
          detail: {
            name: 'ticket_alert_submit',
            metadata: { interests: interests.join(',') },
          },
        }),
      );
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" aria-live="polite" aria-atomic="true">
        <span className="form-success__mark" aria-hidden="true">
          ✓
        </span>
        <div>
          <h3>You’re on the list.</h3>
          <p>{message}</p>
          <button
            className="text-button"
            type="button"
            onClick={() => setStatus('idle')}
          >
            Add another email
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className={`signup-form${compact ? ' signup-form--compact' : ''}`}
      onSubmit={submit}
    >
      <div className="form-row">
        <div className="form-field">
          <label htmlFor={compact ? 'footer-first-name' : 'first-name'}>
            First name
          </label>
          <Input
            className="form-control"
            id={compact ? 'footer-first-name' : 'first-name'}
            name="firstName"
            autoComplete="given-name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor={compact ? 'footer-email' : 'signup-email'}>
            Email
          </label>
          <Input
            className="form-control"
            id={compact ? 'footer-email' : 'signup-email'}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
          />
        </div>
      </div>

      <fieldset className="choice-fieldset">
        <legend>What should we send you?</legend>
        <div className="choice-grid">
          {options.map((option, index) => {
            const id = `${compact ? 'footer-' : ''}newsletter-interest-${index}`;
            return (
              <label className="choice-card" htmlFor={id} key={option}>
                <Checkbox
                  id={id}
                  checked={interests.includes(option)}
                  onCheckedChange={(checked) =>
                    toggle(option, checked === true)
                  }
                />
                <span>{option}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor={compact ? 'footer-website' : 'signup-website'}>
          Website
        </label>
        <input
          id={compact ? 'footer-website' : 'signup-website'}
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="consent-check">
        <input name="consent" type="checkbox" required />
        <span>
          I agree that Cecil Theatre Project may email me about the interests I
          selected. I can unsubscribe at any time. See the{' '}
          <Link href="/privacy">privacy notice</Link>.
        </span>
      </label>

      {status === 'error' && (
        <p className="form-error" role="alert">
          {message}
        </p>
      )}
      <button
        className="button button--acid form-submit"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Joining…' : buttonLabel}
      </button>
    </form>
  );
}
