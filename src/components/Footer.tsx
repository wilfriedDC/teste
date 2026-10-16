import Image from "next/image";
import logo from "@/assets/wilfried-dc-logo.png";

export default function Footer() {
  return (
    <footer>
      <a className="footer-logo" href="#top" aria-label="Wilfried DC home">
        <Image src={logo} alt="" />
      </a>
      <div className="footer-links">
        <a href="https://github.com/wilfriedDC" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/voro-wilfried-dc/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.youtube.com/@wilfrieddc05ouTube" target="_blank" rel="noreferrer">YouTube</a>
        <a href="https://behance.net/wilfrieddc" target="_blank" rel="noreferrer">Behance</a>
      </div>
      <span>© 2026 Wilfried DC</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
