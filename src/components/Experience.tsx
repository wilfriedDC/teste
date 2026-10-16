import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="experience-section section-pad">
      <div className="section-heading reveal">
        <div>
          <div className="section-label">Experience</div>
          <h2>Learning by<br />building.<i className="headline-square" /></h2>
        </div>
        <p>A path shaped by hands-on work, self-directed learning and a commitment to getting better.</p>
      </div>
      <div className="timeline reveal">
        {experience.map(({ years, role, company, result }) => (
          <article key={role}>
            <span>{years}</span>
            <div>
              <h3>{role}</h3>
              <strong>{company}</strong>
            </div>
            <p>{result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
