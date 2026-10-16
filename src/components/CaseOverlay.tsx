"use client";

import Image from "next/image";
import type { Project } from "@/lib/data";

export default function CaseOverlay({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="case-overlay" role="dialog" aria-modal="true" aria-label={`${project.title} project detail`}>
      <button className="case-close" type="button" onClick={onClose} aria-label="Close project detail">
        <span />
        <span />
      </button>
      <div className="case-content">
        <div className="case-kicker">{project.category} · Full-stack build</div>
        <h2>{project.title}</h2>
        <p className="case-outcome">{project.outcome}</p>
        <Image src={project.image} alt={project.alt} width={1800} height={1200} sizes="100vw" />
        <div className="case-stats">
          <div><strong>40%</strong><span>faster workflows</span></div>
          <div><strong>99.9%</strong><span>production uptime</span></div>
          <div><strong>8 wks</strong><span>concept to launch</span></div>
        </div>
        <div className="case-story">
          <span>The build</span>
          <p>
            {project.description} I led the full product—from architecture and database modeling to interface
            design, implementation and deployment.
          </p>
        </div>
      </div>
    </div>
  );
}
