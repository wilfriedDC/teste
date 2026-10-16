import Navbar from "@/components/Navbar";
import ProjectProvider from "@/components/ProjectProvider";
import RevealObserver from "@/components/RevealObserver";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Experience from "@/components/Experience";
import AiFeature from "@/components/AiFeature";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <ProjectProvider>
      <RevealObserver />
      <div className="site-shell">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stack />
          <Work />
          <Services />
          <Process />
          <Experience />
          <Testimonial />
          <Contact />
        </main>
      </div>
    </ProjectProvider>
  );
}
