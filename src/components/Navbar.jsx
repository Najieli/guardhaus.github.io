import MobileNavbar from './MobileNavbar';
import { Link } from 'react-router-dom'

function Navbar() {

  return (
  
  <>
  <MobileNavbar />
  <nav className="desktop-nav">
    
       
            <div className="dropdown">
    
      <Link to="/">Home</Link>
    
      <div className="dropdown-content">

        <Link to="/getting-started">🌸 Getting Started</Link>

        <Link to="/why-guardhaus">♡ Why GuardHaus</Link>

        <Link to="/meet-blanca">👋 Meet Blanca</Link>

        <Link to="/whats-new">✨ What's New</Link>
    
      </div>
    
    </div>
            <div className="dropdown">
    
      <Link to="/beginner-pathway">Beginner Pathway</Link>
    
      <div className="dropdown-content">
    
        <Link to="/beginner-pathway/start-here">Start Here 🌟</Link>
    
        <Link to="/beginner-pathway/dance-basics">Dance Basics</Link>
    
        <Link to="/beginner-pathway/flag-basics">Flag Basics</Link>
    
        <Link to="/beginner-pathway/sabre-basics">Sabre Basics</Link>
    
        <Link to="/beginner-pathway/rifle-basics">Rifle Basics</Link>
    
      </div>
    
    </div>
            <div className="dropdown">
    
      <Link to="/blancas-corner">Blanca's Corner</Link>
    
      <div className="dropdown-content">
    
        <Link to="/blancas-corner/flexibility-101">Flexibility 101</Link>
    
        <Link to="/blancas-corner/handbalancing-101">Handbalancing 101</Link>
    
        <Link to="/blancas-corner/acro-101">Acro 101</Link>
    
        <Link to="/blancas-corner/strength-conditioning">Strength & Conditioning</Link>
    
      </div>
    
    
    </div>
            <div className="dropdown">
    
      <Link to="/guard-forum">Guard Forum</Link>
    
      <div className="dropdown-content">
    
        <Link to="/guard-forum/general">General</Link>
    
        <Link to="/guard-forum/technique-help">Technique Help</Link>
    
        <Link to="/guard-forum/show-design">Show Design</Link>
    
        <Link to="/guard-forum/share-your-work">Share Your Work</Link>
    
      </div>
    
    </div>
            <div className="dropdown">
    
      <Link to="/gallery">Gallery</Link>
    
      <div className="dropdown-content">
    
        <Link to="/gallery/photos">Photos</Link>
    
        <Link to="/gallery/videos">Videos</Link>
    
        <Link to="/gallery/toss-highlights">Toss Highlights</Link>
    
        <Link to="/gallery/community-spotlight">Community Spotlight</Link>
    
      </div>
    
    </div>
            <div className="dropdown">
    
      <Link to="/contact">Contact</Link>
    
      <div className="dropdown-content">
    
        <Link to="/contact/contact-me">Contact Me</Link>
    
        <Link to="/contact/tutorial-requests">Tutorial Requests</Link>
    
        <Link to="/contact/collaborate">Collaborate</Link>
    
        <Link to="/contact/faqs">FAQs</Link>
    
      </div>
    
    </div>
          </nav>
  </>
    
     )

}

export default Navbar
