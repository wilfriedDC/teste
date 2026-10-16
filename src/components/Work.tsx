"use client";

import { useState } from "react";
import { filterCategories, projects } from "@/lib/data";
import { Arrow, GitHubIcon } from "./icons";
import ProjectCard from "./ProjectCard";

export default function Work() {
  const [filter, setFilter] = useState("All");
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="work section-pad" id="work">
      <div className="section-heading reveal">
        <div>
          <div className="section-label">Selected work · 2024—26</div>
          <h2>Built to work.<br />Built to last.<i className="headline-square" /></h2>
        </div>
        <p>End-to-end products where strong engineering and thoughtful design produce measurable results.</p>
      </div>
      <div className="filters reveal" aria-label="Filter projects">
        {filterCategories.map((category) => (
          <button key={category} type="button" className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <div className="work-end reveal">
        <a className="all-work-link" href="#work">View all projects <sup>12</sup> <Arrow diagonal /></a>
        <a className="github-code-link" href="https://github.com/" target="_blank" rel="noreferrer"><GitHubIcon /> See my code on GitHub</a>
      </div>
    </section>
  );
}
