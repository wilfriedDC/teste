import { stackGroups } from "@/lib/data";

export default function Stack() {
  return (
    <section className="stack-section section-pad" id="stack">
      <div className="section-heading reveal">
        <div>
          <div className="section-label light-label">Technical toolkit</div>
          <h2>The tools I<br />build with.<i className="headline-square" /></h2>
        </div>
        <p>Modern, dependable technologies chosen for the product—not for the trend cycle.</p>
      </div>
      <div className="stack-groups reveal">
        {stackGroups.map(({ group, items }) => (
          <div className="stack-group" key={group}>
            <h3>{group}</h3>
            <div>{items.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
