import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Layout from "../layouts/Layout";


function WhyGuardHaus() {
  return (

    <Layout>

    <main className="why-page">

      <section className="why-hero">
        <div className="title-box">
          <h1>Why GuardHaus?</h1>

          <p className="hero-subtitle">
            Your Free One-Stop Resource for Learning Colorguard
          </p>
        </div>
      </section>

      <Navbar/>

      <section className="why-layout">

        {/* LEFT COLUMN */}
        <div className="phone-section">

          <div className="phone">

            <div className="chat-header">
              🌼 GuardHaus Chat 🌼
            </div>

            <div className="phone-decoration flower">🌼</div>
            <div className="phone-decoration heart">🤍</div>
            <div className="phone-decoration sparkle">✨</div>

            <div className="chat-container">

              <div className="message user">
                <p>I wish there was one place to learn guard.</p>
              </div>

              <div className="message guardhaus">
                <h3>That's exactly why I built GuardHaus.</h3>

                <p>
                  When I first started guard, I spent hours piecing together
                  information from teammates, YouTube, and trial and error.
                  I wanted one place where beginners could find everything.
                </p>
              </div>

              <div className="message user">
                <p>There are so many little things nobody teaches.</p>
              </div>

              <div className="message guardhaus">
                <h3>You're not imagining it.</h3>

                <p>
                  Things like what to pack, how to tape equipment,
                  or what to expect at rehearsal often go unspoken.
                  GuardHaus fills in those gaps.
                </p>
              </div>

              <div className="message user">
                <p>I don't even know where to start.</p>
              </div>

              <div className="message guardhaus">
                <h3>You don't have to figure it out alone.</h3>

                <p>
                  That's why I created the Beginner Pathway—
                  to guide you one step at a time.
                </p>
              </div>

              <div className="message typing">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>
          </div>

        </div>

<div className="why-right">

<div className="notes-heading">

  <h2>From these conversations grew… </h2>

</div>
     <div className="notes-grid">

  <div className="why-note-card note1">

    <h3>Beginner Pathway</h3>

    <p>
      I wanted learning guard to feel less overwhelming.
      So I organized everything into one clear roadmap,
      one step at a time.
    </p>

  </div>

  <div className="why-note-card note2">

    <h3>Equipment Guides</h3>

    <p>
      Nobody tells you how much there is to learn about
      flags, rifles, sabres, gloves, tape, and equipment.
      I wanted one place with answers.
    </p>

  </div>

  <div className="why-note-card note3">

    <h3>Performance Tips</h3>

    <p>
      Competitions can feel scary your first season.
      Here you'll find everything I wish someone had
      explained before my first performance.
    </p>

  </div>

  <div className="why-note-card note4">

    <h3>Community</h3>

    <p>
      Guard shouldn't feel lonely.
      I hope GuardHaus becomes a place where beginners
      always feel welcome.
    </p>

  </div>

</div>   

</div>

    </section>

<section className="inspiration-section">

  <h2>A Few Things I Hope You Remember ♡</h2>

  <div className="corkboard">

    <div className="board-note note-one">
      <div className="pin"></div>

      <p>
        You belong here.
      </p>
    </div>

    <div className="board-note note-two">
      <div className="pin"></div>

      <p>
        It's okay to drop.
      </p>
    </div>

    <div className="board-note note-three">
      <div className="pin"></div>

      <p>
        Every expert was once
        a beginner.
      </p>
    </div>

    <div className="board-note note-four">
      <div className="pin"></div>

      <p>
        I'm cheering for you.

        <br /><br />

        ♡ Blanca
      </p>
    </div>

    <div className="board-heart">
    ♡
</div>

  </div>

  <Link
    to="/getting-started"
    className="hero-button"
  >
    🌸 Begin Your Journey
  </Link>

</section>

    </main>

    </Layout>
  );
}

export default WhyGuardHaus;