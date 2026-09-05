import { useState } from "react";
import HeroHeader from "../components/HeroHeader";
import Layout from "../layouts/Layout";
import Navbar from "../components/Navbar";
import { pageTemplates } from "../data/pageTemplates";
import { useLocation } from "react-router-dom";

const forms = {
  "/contact": {
    eyebrow: "SAY HELLO",
    heading: "How can I help, bestie?",
    description: "Use this form for a little hello, a general question, or anything GuardHaus-related that’s on your mind.",
    button: "Send Your Note ♡",
    fields: [
      { name: "name", label: "Your name", type: "text", placeholder: "What should I call you?", required: true },
      { name: "email", label: "Your email", type: "email", placeholder: "you@example.com", required: true },
      { name: "subject", label: "What is this about?", type: "select", options: ["A general question", "A little hello", "Something else"] },
      { name: "message", label: "Your message", type: "textarea", placeholder: "Tell me what’s on your mind...", required: true },
    ],
  },
  "/contact/contact-me": {
    eyebrow: "CONTACT BLANCA",
    heading: "Send a little hello.",
    description: "Have a question, a kind note, or something you’d love to share? I’d be happy to hear from you.",
    button: "Send Your Hello ✿",
    fields: [
      { name: "name", label: "Your name", type: "text", placeholder: "What should I call you?", required: true },
      { name: "email", label: "Your email", type: "email", placeholder: "you@example.com", required: true },
      { name: "message", label: "Your message", type: "textarea", placeholder: "Write your note here...", required: true },
    ],
  },
  "/contact/tutorial-requests": {
    eyebrow: "REQUEST A TUTORIAL",
    heading: "What should we learn next?",
    description: "Tell me the skill you’re working on so future GuardHaus videos can meet you right where you are.",
    button: "Send Tutorial Request 🌸",
    fields: [
      { name: "name", label: "Your name", type: "text", placeholder: "What should I call you?", required: true },
      { name: "email", label: "Your email", type: "email", placeholder: "you@example.com", required: true },
      { name: "skill", label: "What skill would you like help with?", type: "text", placeholder: "For example: flag drop spins or a back walkover", required: true },
      { name: "level", label: "Your current experience", type: "select", options: ["Brand new", "Beginner", "I know the basics", "Ready for a challenge"] },
      { name: "details", label: "Anything else that would help?", type: "textarea", placeholder: "Tell me what feels tricky or what you’d like the video to include..." },
    ],
  },
  "/contact/collaborate": {
    eyebrow: "LET’S COLLABORATE",
    heading: "Let’s make something lovely.",
    description: "Share a little about your project, idea, or community so we can see whether GuardHaus might be a good fit.",
    button: "Send Collaboration Idea ✦",
    fields: [
      { name: "name", label: "Your name", type: "text", placeholder: "What should I call you?", required: true },
      { name: "email", label: "Your email", type: "email", placeholder: "you@example.com", required: true },
      { name: "organization", label: "Organization or social handle", type: "text", placeholder: "Optional, but helpful" },
      { name: "project", label: "Tell me about your idea", type: "textarea", placeholder: "What are you creating, and how would you like to collaborate?", required: true },
    ],
  },
  "/contact/faqs": {
    eyebrow: "ASK A QUESTION",
    heading: "Still wondering something?",
    description: "Send a question you’d like answered in the GuardHaus FAQ. If lots of besties are wondering too, it may become a future resource.",
    button: "Send Your Question ♡",
    fields: [
      { name: "name", label: "Your name", type: "text", placeholder: "Optional" },
      { name: "email", label: "Your email", type: "email", placeholder: "Optional, if you’d like a reply" },
      { name: "question", label: "Your question", type: "textarea", placeholder: "What would you like to know?", required: true },
    ],
  },
};

function ContactFormPage() {
  const { pathname } = useLocation();
  const page = pageTemplates[pathname];
  const form = forms[pathname];
  const [submitted, setSubmitted] = useState(false);

  if (!page || !form) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <HeroHeader title={page.title} subtitle={page.subtitle} />
      <Navbar />

      <main className="contact-page">
        <section className="contact-form-intro">
          <p>{form.eyebrow}</p>
          <h2>{form.heading}</h2>
          <p>{form.description}</p>
        </section>

        <section className="contact-form-card" aria-labelledby="contact-form-heading">
          <div className="contact-form-decoration decoration-left">✿</div>
          <div className="contact-form-decoration decoration-right">✦</div>
          <h2 id="contact-form-heading">A little note from you</h2>

          {submitted ? (
            <div className="contact-success" role="status">
              <div>♡</div>
              <h3>Thank you for sharing!</h3>
              <p>Your form is ready for a real submission connection. Right now this preview confirms the form on this page only—it does not send your message anywhere yet.</p>
              <button className="hero-button" type="button" onClick={() => setSubmitted(false)}>
                Send another note
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {form.fields.map((field) => (
                <div className={`contact-field contact-field-${field.type}`} key={field.name}>
                  <label htmlFor={field.name}>{field.label}{field.required && <span aria-hidden="true"> *</span>}</label>
                  {field.type === "textarea" ? (
                    <textarea id={field.name} name={field.name} placeholder={field.placeholder} required={field.required} rows="5" />
                  ) : field.type === "select" ? (
                    <select id={field.name} name={field.name} required={field.required} defaultValue="">
                      <option value="" disabled>Select one</option>
                      {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                  ) : (
                    <input id={field.name} name={field.name} type={field.type} placeholder={field.placeholder} required={field.required} />
                  )}
                </div>
              ))}
              <p className="contact-form-note">Fields marked with * are required.</p>
              <button className="hero-button contact-submit" type="submit">{form.button}</button>
            </form>
          )}
        </section>
      </main>
    </Layout>
  );
}

export default ContactFormPage;
