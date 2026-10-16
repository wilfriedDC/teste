import Image from "next/image";
import { stats, values } from "@/lib/data";
import me from "@/assets/me.jpeg";
import { Arrow } from "./icons";



export default function About() {
  return (
    <section className="about-detailed section-pad reveal" id="about">
      <div className="section-label">A little about me</div>
      <p className="about-statement">
        I build the whole product, <em>backend, frontend, design.</em> Clean code first.
        Details always. Results over output.
      </p>
      <div className="about-story">
        <div className="portrait-wrap">
          <Image
            src={me}
            alt="Portrait of Wilfried DC"
            width={1000}
            height={1160}
            sizes="(max-width: 900px) 100vw, 40vw"
          />
          
        </div>
        <div className="story-copy">
          <p>I&apos;m Wilfried, an independent developer from Antananarivo, Madagascar. I build thoughtful digital products for people and businesses that value clarity, speed and lasting quality.</p>
          <p>I started in tech by pulling apart interfaces to understand how they worked. That curiosity grew into full-stack engineering, where I could shape not only the surface, but the systems underneath it.</p>
          <p>UI/UX design helps me build experiences people understand. Video editing taught me pacing and storytelling. Together, they make my development work sharper—without distracting from performance, accessibility, clean architecture or the user.</p>
          <div className="about-actions">
            <a className="pill" href="/v.pdf" download="Wilfried_DC_CV.pdf">
              Download CV <Arrow />
            </a>
            <a className="text-link" href="#process">
              More about my approach <Arrow />
            </a>
          </div>
        </div>
      </div>
      <div className="stats-row">
        {stats.map(([value, label]) => (
          <div key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </div>
      <div className="about-extras">
        <div className="values-block">
          <div className="section-label">What drives me</div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={value}><span>0{index + 1}</span>{value}</div>
            ))}
          </div>
        </div>
        <div className="beyond-block">
          <div className="section-label">Beyond code</div>
          <div className="beyond-cards">
            <a href="#work"><strong>UI/UX Design</strong><span>Interfaces built for clarity and momentum.</span><Arrow diagonal /></a>
            <a href="#work"><strong>Video Editing</strong><span>Stories shaped through rhythm and motion.</span><Arrow diagonal /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
