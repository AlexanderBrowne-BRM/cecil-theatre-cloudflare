export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="page-hero">
      <div className="site-shell page-hero__grid">
        <p className="eyebrow motion-rise">{eyebrow}</p>
        <div className="motion-rise motion-rise--delay">
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </div>
    </section>
  );
}
