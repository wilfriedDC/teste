import { heroTech } from "@/lib/data";
import { Arrow } from "./icons";
import FeaturedProjectButton from "./FeaturedProjectButton";

export default function Hero() {
  return (
    <section className="hero section-pad" id="top">
      <div className="eyebrow-row">
        <span>Independent full-stack developer</span>
    
      </div>
      <h1>
        Code that ships
        <br />
        <span>products that last.</span>
        <i className="headline-square" />
      </h1>
      <div className="hero-meta">
        <div>
          <p>
            I&apos;m Wilfried DC, a full-stack developer who designs and builds fast, scalable
            and beautiful web products, from database to pixel.
          </p>
         
        </div>
        <a className="pill" href="#work">View selected work <Arrow /></a>
      </div>
      <FeaturedProjectButton />
      <div className="hero-tech" aria-label="Core technologies">
        {heroTech.map((tech) => <span key={tech}>{tech}</span>)}
      </div>
    </section>
  );
}
