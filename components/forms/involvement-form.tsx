'use client';

import { type SyntheticEvent, useState } from 'react';
import Link from '@/components/site-link';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const options = [
  'Perform',
  'Direct',
  'Design',
  'Build/Tech',
  'Teach',
  'Volunteer',
];

export function InvolvementForm() {
  const [interests, setInterests] = useState<string[]>([]);
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

    if (interests.length === 0) {
      setStatus('error');
      setMessage('Choose at least one way you’d like to get involved.');
      return;
    }

    try {
      const params = new URLSearchParams(window.location.search);
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'involvement',
          name: data.get('name'),
          email: data.get('email'),
          location: data.get('location'),
          interests,
          experience: data.get('experience'),
          availability: data.get('availability'),
          accommodations: data.get('accommodations'),
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
      setMessage(result.message || 'Your interest was received.');
      form.reset();
      setInterests([]);
      window.dispatchEvent(
        new CustomEvent('ctp:track', {
          detail: { name: 'get_involved_submit' },
        }),
      );
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div
        className="form-success form-success--light"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="form-success__mark" aria-hidden="true">
          ✓
        </span>
        <div>
          <h2>Thank you for raising your hand.</h2>
          <p>{message}</p>
          <button
            className="text-button"
            type="button"
            onClick={() => setStatus('idle')}
          >
            Send another response
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="involvement-form" onSubmit={submit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="involvement-name">Name</label>
          <Input
            className="form-control"
            id="involvement-name"
            name="name"
            autoComplete="name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="involvement-email">Email</label>
          <Input
            className="form-control"
            id="involvement-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="involvement-location">
          Where are you based? <span>(optional)</span>
        </label>
        <Input
          className="form-control"
          id="involvement-location"
          name="location"
          autoComplete="address-level2"
          placeholder="Town, county, or region"
        />
      </div>

      <fieldset className="choice-fieldset">
        <legend>How would you like to take part?</legend>
        <div className="choice-grid choice-grid--three">
          {options.map((option, index) => {
            const id = `involvement-interest-${index}`;
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

      <div className="form-field">
        <label htmlFor="involvement-experience">
          Experience, interests, or portfolio link <span>(optional)</span>
        </label>
        <Textarea
          className="form-control form-textarea"
          id="involvement-experience"
          name="experience"
          rows={5}
          placeholder="Tell us what you enjoy making, learning, or helping with. Experience is welcome, not required."
        />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="involvement-availability">
            General availability <span>(optional)</span>
          </label>
          <Textarea
            className="form-control form-textarea"
            id="involvement-availability"
            name="availability"
            rows={4}
            placeholder="Weeknights, weekends, seasonal limits…"
          />
        </div>
        <div className="form-field">
          <label htmlFor="involvement-accommodations">
            Access or accommodation needs <span>(optional)</span>
          </label>
          <Textarea
            className="form-control form-textarea"
            id="involvement-accommodations"
            name="accommodations"
            rows={4}
            placeholder="Share only what would help us make the next conversation accessible."
          />
        </div>
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="involvement-website">Website</label>
        <input
          id="involvement-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <label className="consent-check">
        <input name="consent" type="checkbox" required />
        <span>
          I agree that Cecil Theatre Project may use this information to respond
          about participation opportunities. See the{' '}
          <Link href="/privacy">privacy notice</Link>.
        </span>
      </label>
      {status === 'error' && (
        <p className="form-error" role="alert">
          {message}
        </p>
      )}
      <button
        className="button form-submit"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Submit interest'}
      </button>
    </form>
  );
}
