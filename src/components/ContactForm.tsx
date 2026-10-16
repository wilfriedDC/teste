"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Arrow } from "./icons";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: brancher ici une vraie route (ex. src/app/api/contact/route.ts + Resend / Nodemailer).
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span>Message received.</span>
        <p>Thanks for reaching out. I&apos;ll get back to you within two working days.</p>
        <button type="button" onClick={() => setSubmitted(false)}>Send another note</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Your name<input name="name" required placeholder="Will DC" /></label>
      <label>Email address<input name="email" type="email" required placeholder="dcompany.com" /></label>
      <label>What are you building?<textarea name="message" required rows={3} placeholder="A SaaS product, a new platform, an ambitious redesign..." /></label>
      
      <button className="pill submit-button" type="submit">Send project inquiry <Arrow /></button>
    </form>
  );
}
