import Layout from "../layouts/Layout";
import Navbar from "../components/Navbar";
import HeroHeader from "../components/HeroHeader";
import logo from "../assets/GuardHaus_Logo.svg";

function GettingStarted() {
  return (
    <Layout>

        <HeroHeader

        title="Getting Started"

        subtitle="Your Beginner's Guide to Colorguard"

      />

      <Navbar />

      <main>

        <section className="welcome-section">

  <h2>
    <span>First Things First... Where Do I Start?</span>
  </h2>

  <div className="note-card">

  <div className="welcome-message">

<div className="note-sticker">

    <img src={logo} alt="GuardHaus Logo" />

  </div>

    <h3 className="welcome-note">
      A Little Note From Your Big Sister ♡
    </h3>

    <p>
      Starting color guard can feel a little overwhelming, but I promise you,
      you're not alone. I was a beginner once too! That's why I made this guide
      to help you figure out where to start. We'll take it one step at a time,
      every part of the way.
    </p>

    <p className="welcome-signoff">
      I've got you.
    </p>

    </div>

  </div>

  <section className="journey-section">

  <h2>
    <span>✨ Your Journey Starts Here</span>
  </h2>

  <div className="journey-card">

    <p>
  Think of GuardHaus as your own beginner's guide to color guard. We'll take

  things one step at a time with simple lessons, video tutorials, and optional

  practice activities to help you build confidence. Every lesson builds on the

  last, so you'll always know where to go next.

  <br /><br />

  Take a deep breath, learn at your own pace, and don't forget to celebrate
  every win along the way.
</p>

    <p className="journey-transition">
      Ready? Then let's begin! 🌸
    </p>

  </div>

</section>

<section className="roadmap-section">

  <h2>
    <span>Your GuardHaus Journey</span>
  </h2>

  <p className="roadmap-intro">
        Just follow the lavender brick road—we’ll take it one step at a time. ♡
  </p>

  <div className="roadmap">

  <div className="roadmap-stop left">
    <div className="roadmap-circle">1</div>
    <h3>What Is Color Guard?</h3>
    <div className="roadmap-preview">

    <ul>

      <li>♡ What is Color Guard?</li>

      <li>♡ Equipment Overview</li>

      <li>♡ Guard Terminology</li>

      <li>♡ Fall vs Winter Guard</li>

      <li>♡ Competitions</li>

    </ul>

    <button className="preview-button">

      Continue Journey →

    </button>

  </div>
  </div>

  <div className="roadmap-stop middle">
    <div className="roadmap-circle">2</div>
    <h3>Getting Ready</h3>
    <div className="roadmap-preview">

  <ul>
    <li>♡ What to Wear</li>
    <li>♡ Equipment Checklist</li>
    <li>♡ Practice Bag</li>
    <li>♡ Hair & Appearance</li>
    <li>♡ Stretching</li>
  </ul>

  <button className="preview-button">
    Continue Journey →
  </button>

</div>
  </div>


  <div className="roadmap-stop right">
    <div className="roadmap-circle">3</div>
    <h3>Flag Basics</h3>
    <div className="roadmap-preview">

  <ul>
    <li>♡ Parts of the Flag</li>
    <li>♡ Drop Spins & Flourishes</li>
    <li>♡ Carves & Throw Aways</li>
    <li>♡ Short Stops</li>
    <li>♡ Beginner Tosses</li>
  </ul>

  <button className="preview-button">
    Continue Journey →
  </button>

</div>
  </div>


  <div className="roadmap-stop middle">
    <div className="roadmap-circle">4</div>
    <h3>Rifle Basics</h3>
    <div className="roadmap-preview">

  <ul>
    <li>♡ Parts of a Rifle</li>
    <li>♡ Drop Spins & Flourishes</li>
    <li>♡ Backhands & Double Time</li>
    <li>♡ Short Stops</li>
    <li>♡ Tosses</li>
  </ul>

  <button className="preview-button">
    Continue Journey →
  </button>

</div>
  </div>

  

  <div className="roadmap-stop left">
    <div className="roadmap-circle">5</div>
    <h3>Sabre Basics</h3>
    <div className="roadmap-preview">

  <ul>
    <li>♡ Parts of a Sabre</li>
    <li>♡ Drop Spins & Flourishes</li>
    <li>♡ Backhands</li>
    <li>♡ Short Stops & Blade Tosses</li>
    <li>♡ 5, 7 Set Up Tosses</li>
  </ul>

  <button className="preview-button">
    Continue Journey →
  </button>

</div>
  </div>

 
  <div className="roadmap-stop middle">
    <div className="roadmap-circle">6</div>
    <h3>Dance Basics</h3>
    <div className="roadmap-preview">

  <ul>
    <li>♡ Posture</li>
    <li>♡ Body Positions</li>
    <li>♡ Incorporating Breathe</li>
    <li>♡ Across the Floors</li>
    <li>♡ Dance Jumps</li>
  </ul>

  <button className="preview-button">
    Continue Journey →
  </button>

</div>
  </div>

  

  <div className="roadmap-stop right">
    <div className="roadmap-circle">7</div>
    <h3>Blanca's Corner</h3>
    <div className="roadmap-preview">

  <ul>
    <li>♡ Flexibility</li>
    <li>♡ Handbalancing</li>
    <li>♡ Basic Acrobatics</li>
    <li>♡ Contortion</li>
  </ul>

  <button className="preview-button">
    Continue Journey →
  </button>

</div>
  </div>

 
  <div className="roadmap-stop middle">
    <div className="roadmap-circle">8</div>
    <h3>Beyond the Basics</h3>
    <div className="roadmap-preview">

  <ul>
    <li>♡ Advanced Flag Tosses</li>
    <li>♡ Body Under Flag Tosses</li>
    <li>♡ Rifle Tricks</li>
    <li>♡ Sabre Tricks</li>
    <li>♡ Dance Tricks</li>
  </ul>

  <button className="preview-button">
    Continue Journey →
  </button>

</div>
  </div>

  

  <div className="roadmap-stop left">
    <div className="roadmap-circle">9</div>
    <h3>Putting It All Together</h3>
    <div className="roadmap-preview">

  <ul>
    <li>♡ Body Warm Ups & Exercises</li>
    <li>♡ Dance Combos</li>
    <li>♡ Flag Combos</li>
    <li>♡ Rifle Combos</li>
    <li>♡ Sabre Combos</li>
  </ul>

  <button className="preview-button">
    Continue Journey →
  </button>

</div>
  </div>



  <div className="roadmap-stop middle">
    <div className="roadmap-circle">10</div>
    <h3>Celebrate Your Journey</h3>
    <div className="roadmap-preview">

  <ul>
    <li>♡ Submit A Video for Spotlight</li>
    <li>♡ Share Your Journey With Others</li>
    <li>♡ Contribute Feedback</li>
    <li>♡ Sign up to be a Big Sister Mentor</li>
    <li>♡ Award Certificate</li>
  </ul>

  <button className="preview-button">
    Continue Journey →
  </button>

</div>
  </div>

</div>

</section>

</section>

<section className="journey-closing">

  <div className="closing-card">

    <div className="corner-flower top-left">✿</div>
    <div className="corner-flower top-right">✿</div>

    <h2>Your Journey Begins</h2>

    <p className="opening-line">
      All your favorite colorguard performers were once beginners.
    </p>

    <div className="closing-divider"></div>

    <p>
  It can be easy to look at all these skills and feel overwhelmed, like you'll never
  master every single one. But the goal is not about perfection. It's about
  approaching each new skill with patience, curiosity, and attention to all the little
 details.
</p>
<br/>
<p>
  Fifteen minutes of focused, intentional practice will take you further than
  thirty minutes of just going through the motions. Approach every practice with one
  small goal. Hone in on that one single detail, and don't worry if the rest of the skill
  isn't perfect yet.
</p>
<br/>
<p>
  The truth is, you'll probably always feel like there's room to improve—and
  that's okay. Just know, that somewhere along the way, other people will start noticing
  your growth even before you do. One day, someone will look up to you the same way
  you look up to your favorite performers today.
</p>

<div className="closing-divider"></div>

<p className="closing-thanks">
 Drop without fear because TRUST...
</p>

<h3>One day those catches will be iconic. ♡</h3>

<div className="signature">
  With love,<br />
      <span>GuardHaus ♡</span>
    </div>

    <div className="corner-flower bottom-left">✿</div>
    <div className="corner-flower bottom-right">✿</div>

  </div>

</section>

      </main>
    </Layout>
  );
}

export default GettingStarted;