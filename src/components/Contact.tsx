import { CONTACT_EMAIL } from "@/lib/data";
import { Arrow } from "./icons";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-head reveal">
        <span className="availability"><i /> Available for freelance / full-time</span>
        <h2>Have a project in mind?<br /><em>Let&apos;s build it.</em></h2>
      </div>
      <div className="contact-grid reveal">
        <div className="contact-direct">
          <p>Tell me what you&apos;re building, where you need help, and what a successful launch looks like.</p>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL} <Arrow diagonal /></a>
          <span>Antananarivo, Madagascar · Working worldwide</span>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </section>
  );
}
