"use client";

import Image from "next/image";
import type { Project } from "@/lib/data";
import { Arrow, GitHubIcon } from "./icons";
import { useProject } from "./ProjectProvider";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { openProject } = useProject();

  return (
    <article className="project-card reveal">
      <button className="project-open" type="button" onClick={() => openProject(project)} aria-label={`Open ${project.title} case study`}>
        <div className="project-visual">
          <Image src={project.image} alt={project.alt} width={1800} height={1340} sizes="(max-width: 900px) 100vw, 50vw" />
          <div className="project-reveal">
            <p>{project.description}</p>
            <span className="round-arrow"><Arrow diagonal /></span>
          </div>
        </div>
      </button>
      <div className="project-info dev-project-info">
        <div>
          <span className="project-index">0{index + 1}</span>
          <h3>{project.title}</h3>
          <p>{project.outcome}</p>
        </div>
        <span className="project-year">{project.year}</span>
      </div>
      <div className="project-bottom">
        <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="project-links">
          <a href="#" onClick={(event) => event.preventDefault()}>Live demo <Arrow diagonal /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <GitHubIcon /></a>
        </div>
      </div>
    </article>
  );
}
