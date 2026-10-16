import { services } from "@/lib/data";
import { Arrow } from "./icons";

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-heading reveal">
        <div>
          <div className="section-label light-label">Ways I can help</div>
          <h2>From idea<br />to deployed.<i className="headline-square" /></h2>
        </div>
        <p>One partner from the first product conversation through architecture, interface and launch.</p>
      </div>
      <div className="service-list reveal">
        {services.map(({ number, title, copy }) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
            <span className="service-arrow"><Arrow diagonal /></span>
          </article>
        ))}
      </div>
      <p className="service-extra">Also available for motion graphics and video editing.</p>
    </section>
  );
}
