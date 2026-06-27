import './App.css'
import handstandImg from './assets/Handstand.JPG'
import plankTossImg from './assets/PlankToss.jpg'
import elbowStandImg from './assets/ElbowStand.jpg'
import wingsImg from './assets/Wings.jpeg'
import CrocodileIMG from './assets/Crocodile.JPG'
import ActionShotIMG from './assets/ActionShot.jpg'
import finalsVideo from './assets/Finals-video.mp4'
import logo from './assets/GuardHaus_Logo.svg'


function App() {
  return (
    <main>
      <div className="title-box">
        <h1>
          Guard
          <img src={logo} alt="GuardHaus Logo" className="title-logo" />
          Haus
        </h1>
        <p>A Guard Hub for Aspiring Debbies ♡</p>
      </div>

      <nav>

   
        <div className="dropdown">

  <a href="#">Home</a>

  <div className="dropdown-content">

    <a href="#">Welcome</a>

    <a href="#">Why GuardHaus?</a>

    <a href="#">Meet Blanca</a>

    <a href="#">Whats New</a>

  </div>

</div>
        <div className="dropdown">

  <a href="#">Beginner Pathway</a>

  <div className="dropdown-content">

    <a href="#">Getting Started</a>

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

      <section className="cinematic-section">

  <div className="poetic-line">
    Every
    <br />
    Drop
    <br />
    Teaches
  </div>

  <video
    autoPlay
    muted
    loop
    playsInline
    className="cinematic-video"
    >
  <source src={finalsVideo} type="video/mp4" />
  </video>

  <div className="poetic-line">
    So
    <br />
    Catch
    <br />
    Fearlessly
  </div>

</section>

<div className="hero-button-container">
  <button className="hero-button">
    Join Here Bestie ♡
  </button>
</div>

<div className="carousel-section">
  
  <div className="guard-card-container">

    <div className="guard-card">

    <div className="photo-placeholder">

      <img
        src={plankTossImg}
        alt="Feeling Myself Performing ♡"
        className="floating-photo"
      />

      <div className="photo-caption">
        Feeling Myself Performing ♡
      </div>

    </div>

      <h2>Beginner's Pathway</h2>

      <p>A guide to movement & equipment technique:</p>

      <ul>
        <li>Flag Lovers</li>
        <li>Rifle Baddies</li>
        <li>Sabre Divas</li>
        <li>Dancer Queens</li>
      </ul>

  </div>


    <div className="guard-card">

      <div className="photo-placeholder">

        <img
          src={handstandImg}
          alt="Needle Pose"
          className="floating-photo"
        />

        <div className="photo-caption">
          Needle Pose ♡
        </div>

      </div>

        <h2>Train With Me</h2>

        <p>A guide to circus basics:</p>

          <ul>
            <li>Warm Up & Stretch</li>
            <li>Flexibilty & Contortion</li>
            <li>Handstands & Handbalancing</li>
            <li>Acrobatic Skills & Jumps</li>
          </ul>

  </div>


  <div className="guard-card">

    <div className="photo-placeholder">

      <img
        src={ActionShotIMG}
        alt="First Performance"
        className="floating-photo"
        />

      <div className="photo-caption">
        First Performance ♡
      </div>

    </div>

      <h2>Beyond Basics</h2>

      <p>Mastered the basics? It's time for some fun:</p>

        <ul>
          <li>Creative Tosses</li>
          <li>Creative Exchanges</li>
          <li>Creative Movement Skills</li>
          <li>Challenge Skills</li>
          </ul>

    </div>

    <div className="guard-card">

    <div className="photo-placeholder">

      <img
        src={elbowStandImg}
        alt="First Performance"
        className="floating-photo"
        />

      <div className="photo-caption">
        First Performance ♡
      </div>

    </div>

      <h2>Big Sister Help</h2>

      <p>You have questions? I have answers:</p>

      <ul>
        <li>First Practice Survival Guide</li>
        <li>Confidence & Performance Nerves</li>
        <li>Hair, Makeup & Competition Day</li>
        <li>Ask Your Big Sister</li>
      </ul>

    </div>


    <div className="guard-card">

    <div className="photo-placeholder">

      <img
        src={CrocodileIMG}
        alt="First Performance"
        className="floating-photo"
        />

      <div className="photo-caption">
        First Performance ♡
      </div>

    </div>

      <h2>Guard Forum</h2>

      <p>The place to share, exchange, and grow together:</p>

      <ul>
        <li>Beginner Questions</li>
        <li>Community Discussions</li>
        <li>Show Design & Choreography</li>
        <li>Share Your Work</li>
      </ul>

    </div>

    <div className="guard-card">

    <div className="photo-placeholder">

      <img
        src={wingsImg}
        alt="First Performance"
        className="floating-photo"
        />

      <div className="photo-caption">
        First Performance ♡
      </div>

    </div>

      <h2>Coaches Corner</h2>

      <p>How to inspire the next generation of guard members ♡ :</p>

      <ul>
        <li>Teaching Beginners</li>
        <li>Lesson Plans</li>
        <li>Practice Planning</li>
        <li>Team Building</li>
      </ul>

    </div>

  </div>

</div>

<div className="encouragement-box">
  <h2>Why I Built GuardHaus</h2>

  <p>
    There was a time when it felt like I had to search all over the internet and
    social media just to learn more about color guard or discover new skills.
    This shared experience within our niche sport and community inspired me to change that.
    From this, GuardHaus was born.
  </p>

  <p>
    GuardHaus is a place where we can learn, grow, and support one another
    through every toss, spin, catch, and drop. It is a free resource for anyone
    just beginning their journey, as well as those who have already fallen in
    love with the wonderful world of color guard.
  </p>
</div>

<div className="quote-banner">
  <h3>♡  Remember  ♡</h3>

  <p className="final-quote">
    " Love starts with the first drop. "
  </p>
</div>

<div className="footer-divider">
  ♡ ♡ ♡
</div>

<footer>

  <p className="footer-made">

     Made with ♡ by Blanca

  </p>

  <p className="footer-credit">

    Logo Artwork
    <br />
    by Hannah Zubin

  </p>

  <a

  href= "#"

  target="_blank"

  rel="noopener noreferrer"

  className="hannah-button"

>

  Work with Hannah ♡

</a>


</footer>

    </main>
  )
}

export default App