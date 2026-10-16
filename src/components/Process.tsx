import { process } from "@/lib/data";

export default function Process() {
  return (
    <section className="process-section section-pad" id="process">
      <div className="section-heading reveal">
        <div>
          <div className="section-label">How I work</div>
          <h2>Clear process.<br />No surprises.<i className="headline-square" /></h2>
        </div>
        <p>A lightweight process that keeps momentum high and communication direct.</p>
      </div>
      <div className="process-grid reveal">
        {process.map(({ number, title, copy }) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
