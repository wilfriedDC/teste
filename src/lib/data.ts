import type { StaticImageData } from "next/image";

// Photos stockées dans src/assets/ — importées statiquement : Next.js les optimise
// et connaît leurs dimensions. ⚠️ Adapte les noms de fichiers aux tiens.
import dentaflow from "@/assets/M.jpg";
import tragnorek from "@/assets/www.png";
import dimyCreatives from "@/assets/final02.png";
import jarina from "@/assets/WDC.png";

export type Project = {
  title: string;
  category: string;
  outcome: string;
  description: string;
  stack: string[];
  image: StaticImageData | string; // import local (assets) ou URL distante
  alt: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "DentaFlow",
    category: "Software",
    outcome: "A functional dental practice management application.",
    description:
      "A desktop-oriented application for managing dental patients, appointments, invoices and payments, designed for the practical needs of dental practices in Madagascar.",
    stack: ["React", "TypeScript", "Node.js", "Prisma", "SQLite"],
    image: dentaflow,
    alt: "DentaFlow dental practice management interface",
    year: "2026",
  },
  {
    title: "Tragnorek",
    category: "Web Development",
    outcome: "A digital space for community and connection.",
    description:
      "A community website concept designed to showcase the association, its members, activities, initiatives and opportunities to participate.",
    stack: ["Web Development", "UI/UX", "Database"],
    image: tragnorek, // ← était `src: { tragnorek }` : mauvaise clé + objet au lieu de l'image
    alt: "Tragnorek community website",
    year: "2026",
  },
  {
    title: "Dimy Creatives",
    category: "Web Development",
    outcome: "A digital presence for a creative brand.",
    description:
      "A website project for a creative brand focused on presenting its identity, visual work and services through a considered digital experience.",
    stack: ["Web Design", "UI/UX", "Development"],
    image: dimyCreatives,
    alt: "Dimy Creatives website design",
    year: "2026",
  },
  {
    title: "Fardiot — JARINA",
    category: "Creative",
    outcome: "A music video directed and finished in DaVinci Resolve.",
    description:
      "A music video project combining visual storytelling, shot composition and color grading to create a cohesive visual experience.",
    stack: ["DaVinci Resolve", "Color Grading", "Direction"],
    image: jarina,
    alt: "A frame from the JARINA music video",
    year: "2026",
  },
];

export const filterCategories = ["All", "Software", "Web Development", "Creative"];

export const navItems = ["Work", "About", "Stack", "Services", "Contact"];

export const heroTech = ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"];

export const stackGroups: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "Express", "NestJS", "REST", "GraphQL"] },
  { group: "Database", items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"] },
  { group: "DevOps & Tools", items: ["Git", "Docker", "Vercel", "AWS", "CI/CD", "Linux"] },
  { group: "Design & Video", items: ["Figma", "Adobe Premiere Pro", "After Effects", "Photoshop"] },
];

export const services: { number: string; title: string; copy: string }[] = [
  { number: "01", title: "Full-stack web development", copy: "Custom web apps, dashboards and SaaS products, designed and built end to end." },
  { number: "02", title: "API & backend engineering", copy: "Secure, scalable APIs, well-structured databases and dependable integrations." },
  { number: "03", title: "UI/UX & front-end craft", copy: "Pixel-perfect interfaces built straight from my own Figma designs—no handoff gaps." },
  { number: "04", title: "Deploy & maintain", copy: "CI/CD, hosting, performance optimization and ongoing product support." },
];

export const process: { number: string; title: string; copy: string }[] = [
  { number: "01", title: "Discover", copy: "Define the right problem, audience and measure of success." },
  { number: "02", title: "Design", copy: "Map the experience and prototype the clearest solution." },
  { number: "03", title: "Build", copy: "Engineer clean, tested systems from database to interface." },
  { number: "04", title: "Launch", copy: "Ship, measure, learn and improve with real-world data." },
];

export const experience: { years: string; role: string; company: string; result: string }[] = [
  { years: "2025—Now", role: "Independent Full-Stack Developer", company: "Freelance", result: "Delivered scalable web products for startups and growing businesses." },
  { years: "2026—Now", role: "Full-Stack Developer", company: "Dimy Creatives", result: "Built reusable application architecture that reduced delivery time by 30%." },
  { years: "2025—Now", role: "Front-End Developer & Designer", company: "Independent", result: "Turned early product ideas into polished, responsive MVPs ready for launch." },
];

export const stats: [string, string][] = [
  ["2+", "Years of experience"],
  ["3+", "Projects delivered"],
  ["3+", "Happy clients"],
  ["3", "Dev · Design · Video"],
];

export const values = ["Ship fast", "Think in systems", "Care about details", "Keep learning"];

export const CONTACT_EMAIL = "vorodely27@gmail.com";