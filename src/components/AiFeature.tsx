import { Arrow } from "./icons";

export default function AiFeature() {
  return (
    <section className="ai-feature section-pad reveal">
      <div className="ai-copy">
        <div className="section-label">Applied intelligence</div>
        <h2>Building with AI,<br /><em>responsibly.</em></h2>
        <p>I integrate useful AI features—chatbots, workflow automation and LLM APIs—into real products with thoughtful guardrails, transparency and human control.</p>
        <a className="dark-link" href="#contact">Build an AI-enabled product <Arrow /></a>
      </div>
      <div className="ai-art" aria-hidden="true">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="signal">HUMAN<br />IN THE<br />LOOP</div>
      </div>
    </section>
  );
}
