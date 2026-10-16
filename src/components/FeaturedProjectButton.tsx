"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import { Arrow } from "./icons";
import { useProject } from "./ProjectProvider";

export default function FeaturedProjectButton() {
  const { openProject } = useProject();
  const featured = projects[0];

  return (
    <button className="hero-image-wrap" type="button" onClick={() => openProject(featured)}>
      <Image
        src={featured.image}
        alt={featured.alt}
        width={2200}
        height={1100}
        sizes="100vw"
        priority
      />
      <div className="hero-image-overlay">
        <span>Featured build · {featured.title}</span>
        <span className="round-arrow"><Arrow diagonal /></span>
      </div>
    </button>
  );
}