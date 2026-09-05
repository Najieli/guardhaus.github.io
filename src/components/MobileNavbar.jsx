import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const sections = [[["/", "Home"], ["/getting-started", "🌸 Beginner’s Pathway"], ["/why-guardhaus", "♡ Why GuardHaus"], ["/meet-blanca", "👋 Meet Blanca"], ["/whats-new", "✨ What's New"]], [["/beginner-pathway", "Start Here"], ["/beginner-pathway/start-here", "Getting Started 🌟"], ["/beginner-pathway/flag-basics", "Flag Basics"], ["/beginner-pathway/rifle-basics", "Rifle Basics"], ["/beginner-pathway/sabre-basics", "Sabre Basics"], ["/beginner-pathway/dance-basics", "Dance Basics"]], [["/blancas-corner", "Blanca's Corner"], ["/blancas-corner/getting-started", "Blanca’s Corner 🌟"], ["/blancas-corner/flexibility-101", "Flexibility 101"], ["/blancas-corner/handbalancing-101", "Handbalancing 101"], ["/blancas-corner/acro-101", "Acro 101"], ["/blancas-corner/strength-conditioning", "Strength & Conditioning"]], [["/beyond-the-basics", "Beyond Basics"], ["/beyond-the-basics/getting-started", "Beyond the Basics 🌟"], ["/beyond-the-basics/warm-up-exercises", "Warm Up Exercises"], ["/beyond-the-basics/advanced-skills", "Advanced Skills"], ["/beyond-the-basics/combo-routines", "Combo Routines"]], [["/guard-forum", "Community"], ["/guard-forum/general", "General"], ["/guard-forum/technique-help", "Technique Help"], ["/guard-forum/show-design", "Show Design"], ["/guard-forum/share-your-work", "Share Your Work"]], [["/gallery", "Gallery"], ["/gallery/photos", "Photos"], ["/gallery/videos", "Videos"], ["/gallery/toss-highlights", "Toss Highlights"], ["/gallery/community-spotlight", "Community Spotlight"]], [["/contact", "Contact"], ["/contact/contact-me", "Contact Me"], ["/contact/tutorial-requests", "Tutorial Requests"], ["/contact/collaborate", "Collaborate"], ["/contact/faqs", "FAQs"]]];

export default function MobileNavbar() {
  const [open, setOpen] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const close = () => { setOpen(null); setExpanded(false); };
  const nav = useRef(null);
  useEffect(() => {
    const closeOutside = event => { if (!nav.current?.contains(event.target)) { setOpen(null); setExpanded(false); } };
    const desktop = window.matchMedia('(min-width: 1101px)');
    const closeOnDesktop = () => { if (desktop.matches) { setOpen(null); setExpanded(false); } };
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => { document.removeEventListener('pointerdown', closeOutside); desktop.removeEventListener('change', closeOnDesktop); };
  }, []);
  return <nav className="mobile-nav" aria-label="Main navigation" ref={nav} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) close();
  }} onKeyDown={event => {
    if (event.key === 'Escape' && expanded) {
      nav.current.querySelector('.mobile-menu-toggle')?.focus();
      close();
    }
  }}>
    <div className="mobile-nav-bar">
      <Link to="/" className="mobile-nav-brand" onClick={close}>GuardHaus ♡</Link>
      <button type="button" className="mobile-menu-toggle" aria-expanded={expanded} aria-controls="mobile-menu-content" onClick={() => { setExpanded(!expanded); setOpen(null); }}>
        <span aria-hidden="true">{expanded ? '✕' : '☰'}</span> {expanded ? 'Close' : 'Menu'}
      </button>
    </div>
    <div id="mobile-menu-content" hidden={!expanded}>
    <div className="mobile-nav-labels">
      {sections.map(([[path, title]], index) => <button type="button" key={path} data-section={index} aria-expanded={open === index} aria-controls={`mobile-links-${index}`} onClick={() => setOpen(open === index ? null : index)}>{title}</button>)}
    </div>
    {sections.map((links, index) => <div className="mobile-nav-panel" id={`mobile-links-${index}`} key={links[0][0]} hidden={open !== index}>
      {links.map(([to, label], linkIndex) => <Link key={to} to={to} onClick={close}>{label}{linkIndex === 0 ? ' overview' : ''}</Link>)}
    </div>)}
    </div>
  </nav>;
}
