import { Link } from 'react-router-dom'

function Navbar() {

  return (
  
  <nav>
    
       
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
    
      <a href="#">Beginner Pathway</a>
    
      <div className="dropdown-content">
    
        <a href="#">Start Here 🌟 </a>
    
        <a href="#">Dance Basics</a>
    
        <a href="#">Flag Basics</a>
    
        <a href="#">Sabre Basics</a>
    
        <a href="#">Rifle Basics</a>
    
      </div>
    
    </div>
            <div className="dropdown">
    
      <a href="#">Blanca's Corner</a>
    
      <div className="dropdown-content">
    
        <a href="#">Flexibility 101</a>
    
        <a href="#">Handbalancing 101</a>
    
        <a href="#">Acro 101</a>
    
        <a href="#">Strength & Conditioning</a>
    
      </div>
    
    
    </div>
            <div className="dropdown">
    
      <a href="#">Guard Forum</a>
    
      <div className="dropdown-content">
    
        <a href="#">General</a>
    
        <a href="#">Technique Help</a>
    
        <a href="#">Show Design</a>
    
        <a href="#">Share Your Work</a>
    
      </div>
    
    </div>
            <div className="dropdown">
    
      <a href="#">Gallery</a>
    
      <div className="dropdown-content">
    
        <a href="#">Photos</a>
    
        <a href="#">Videos</a>
    
        <a href="#">Toss Highlights</a>
    
        <a href="#">Community Spotlight</a>
    
      </div>
    
    </div>
            <div className="dropdown">
    
      <a href="#">Contact</a>
    
      <div className="dropdown-content">
    
        <a href="#">Contact Me</a>
    
        <a href="#">Tutorial Requests</a>
    
        <a href="#">Collaborate</a>
    
        <a href="#">FAQs</a>
    
      </div>
    
    </div>
          </nav>
    
     )

}

export default Navbar