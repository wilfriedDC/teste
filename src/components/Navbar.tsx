"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/wilfried-dc-logo.png";
import { CONTACT_EMAIL, navItems } from "@/lib/data";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { Arrow, GitHubIcon } from "./icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useBodyScrollLock(menuOpen);

  return (
    <>
      <header className="navbar">
        <a className="logo-link" href="#top" aria-label="Wilfried DC home">
          <Image src={logo} alt="Wilfried DC" priority />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="github-link" href="https://github.com/wilfriedDC" target="_blank" rel="noreferrer" aria-label="Wilfried DC on GitHub">
            <GitHubIcon />
          </a>
          <a className="pill pill-small desktop-talk" href="#contact">
            Let&apos;s talk <Arrow diagonal />
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <nav>
          {navItems.map((item, index) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              <small>0{index + 1}</small>
              {item}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <span>Available for freelance & full-time</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </>
  );
}
