'use client';

import { useEffect, useRef, useState } from 'react';
import Link from '@/components/site-link';

type Preference = 'accepted' | 'essential' | null;
type TrackDetail = { name: string; metadata?: Record<string, string> };

const storageKey = 'ctp_analytics_preference';

export function AnalyticsConsent() {
  const [preference, setPreference] = useState<Preference>(null);
  const [ready, setReady] = useState(false);
  const initialTracked = useRef(false);

  function send(name: string, metadata: Record<string, string> = {}) {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source') ?? params.get('ref') ?? undefined;
    void fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        pathname: window.location.pathname,
        source,
        metadata,
      }),
      keepalive: true,
    });
  }

  function trackInitial() {
    if (initialTracked.current) return;
    initialTracked.current = true;
    const params = new URLSearchParams(window.location.search);
    if (params.get('utm_source') || params.get('ref')) send('partner_source');
    if (window.location.pathname === '/productions/little-shop-of-horrors')
      send('show_page_view');
  }

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey) as Preference;
    const frame = window.requestAnimationFrame(() => {
      setPreference(
        saved === 'accepted' || saved === 'essential' ? saved : null,
      );
      setReady(true);
      if (saved === 'accepted') trackInitial();
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    function handleTrack(event: Event) {
      if (window.localStorage.getItem(storageKey) !== 'accepted') return;
      const detail = (event as CustomEvent<TrackDetail>).detail;
      if (detail?.name) send(detail.name, detail.metadata ?? {});
    }
    window.addEventListener('ctp:track', handleTrack);
    return () => window.removeEventListener('ctp:track', handleTrack);
  }, []);

  function choose(value: Exclude<Preference, null>) {
    window.localStorage.setItem(storageKey, value);
    setPreference(value);
    if (value === 'accepted') trackInitial();
  }

  if (!ready || preference) return null;

  return (
    <section className="consent-banner" aria-label="Analytics preference">
      <div>
        <p className="consent-banner__title">Help us learn what works</p>
        <p>
          Optional, first-party analytics tell CTP which pages and ticket links
          are useful. We do not run advertising trackers.{' '}
          <Link href="/privacy">Read the privacy notice</Link>.
        </p>
      </div>
      <div className="consent-banner__actions">
        <button
          className="button button--outline-dark"
          type="button"
          onClick={() => choose('essential')}
        >
          Essential only
        </button>
        <button
          className="button"
          type="button"
          onClick={() => choose('accepted')}
        >
          Allow analytics
        </button>
      </div>
    </section>
  );
}
