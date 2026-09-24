export default function Loading() {
  return (
    <main className="loading-state" aria-busy="true" aria-live="polite">
      <div className="site-shell">
        <p>Preparing the next page…</p>
        <div className="loading-rule" />
      </div>
    </main>
  );
}
