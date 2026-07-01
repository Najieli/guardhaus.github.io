import '../App.css'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from "../layouts/Layout";
import HeroHeader from "../components/HeroHeader";

import handstandImg from '../assets/Handstand.JPG'
import plankTossImg from '../assets/PlankToss.jpg'
import elbowStandImg from '../assets/ElbowStand.jpg'
import wingsImg from '../assets/Wings.jpeg'
import CrocodileIMG from '../assets/Crocodile.JPG'
import ActionShotIMG from '../assets/ActionShot.jpg'
import finalsVideo from '../assets/Finals-video.mp4'
import logo from '../assets/GuardHaus_Logo.svg'



function Home() {
  return (
<Layout>
    <main>
          <HeroHeader
  showLogo={true}
  subtitle="A Guard Hub for Aspiring Debbies ♡"
/>

          <Navbar />
    
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
    
      <div className="scroll-hint left">
      <div className="scroll-bubble">
        scroll this way ♡
      </div>
    
      <div className="scroll-arrow">
        ❮❮
      </div>
    </div>
    
    <div className="scroll-hint right">
      <div className="scroll-bubble">
        scroll this way ♡
      </div>
    
      <div className="scroll-arrow">
        ❯❯
      </div>
    </div>
      
      <div className="guard-card-container">
    
        <div className="guard-card">
    
        <div className="photo-placeholder">
    
          <img
            src={plankTossImg}
            alt="Flag 45 Toss: Plank Catch"
            className="floating-photo"
          />
    
          <div className="photo-caption">
            Flag 45 Toss: Plank Catch ♡
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
              alt="Contortion Handstand"
              className="floating-photo"
            />
    
            <div className="photo-caption">
              Contortion Handstand ♡
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
            alt="Magic at Dayton Finals"
            className="floating-photo"
            />
    
          <div className="photo-caption">
            Magic at Dayton Finals ♡
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
            alt="POV of a WGI Arena Upsidedown"
            className="floating-photo"
            />
    
          <div className="photo-caption">
            POV of a WGI Arena Upsidedown ♡
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
            alt="Circus Meets Colorguard"
            className="floating-photo"
            />
    
          <div className="photo-caption">
            Circus Meets Colorguard ♡
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
            alt="From Performer to Coach"
            className="floating-photo"
            />
    
          <div className="photo-caption">
            From Performer to Coach ♡
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
    
        </main>
</Layout>
  )
}

export default Home