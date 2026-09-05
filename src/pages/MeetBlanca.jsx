import { Link } from "react-router-dom";
import HeroHeader from "../components/HeroHeader";
import Layout from "../layouts/Layout";
import Navbar from "../components/Navbar";

function MeetBlanca() {
  return (
    <Layout>
      <HeroHeader
        title="Meet Blanca"
        subtitle="Your GuardHaus Big Sister ♡"
      />

      <Navbar />

      <main className="meet-blanca-page">
        <section className="meet-intro">
          <div className="meet-photo-frame" aria-label="Portrait placeholder">
            <div className="meet-photo-sparkle sparkle-one">✦</div>
            <div className="meet-photo-sparkle sparkle-two">✿</div>
            <div className="meet-photo-placeholder">
              <span>Photo</span>
              <small>coming soon</small>
            </div>
            <p>Save a favorite photo here ♡</p>
          </div>

          <div className="meet-note-card">
            <p className="meet-eyebrow">A LITTLE HELLO</p>
            <h2>Hi bestie, I’m Blanca!</h2>
            <p>
              I’m a color guard performer, movement lover, and the person behind
              GuardHaus. I created this little corner of the internet because
              learning guard should feel exciting—not like you have to figure it
              all out alone. Whether you’re picking up a flag for the first time
              or chasing your next big skill, I’m here to cheer you on through
              every spin, toss, catch, and drop.
            </p>
            <p className="meet-signoff">Let’s grow together. ♡</p>
          </div>
        </section>

        <section className="meet-template-section" aria-labelledby="story-heading">
          <h2 id="story-heading">My Guard Story</h2>
          <p className="meet-section-intro">
            A space to share where it all began and the moments that made you
            fall in love with guard.
          </p>

          <article className="meet-template-card story-card">
            <span className="meet-card-label">YOUR STORY TEMPLATE</span>
            <p>
              Write about your first season, the people who encouraged you, and
              a performance, lesson, or tiny victory you’ll never forget.
            </p>
          </article>
        </section>

        <section className="meet-template-section" aria-labelledby="favorites-heading">
          <h2 id="favorites-heading">A Few of My Favorites</h2>

          <div className="meet-favorites-grid">
            <article className="meet-template-card favorite-card favorite-card-pink">
              <span>♡ FAVORITE SKILL</span>
              <p>Add your go-to toss, trick, dance style, or movement obsession.</p>
            </article>
            <article className="meet-template-card favorite-card favorite-card-lilac">
              <span>✿ FAVORITE GUARD MEMORY</span>
              <p>Save a show-day memory, team tradition, or proudest moment here.</p>
            </article>
            <article className="meet-template-card favorite-card favorite-card-cream">
              <span>✦ OUTSIDE OF GUARD</span>
              <p>Share hobbies, tiny joys, or anything that helps people know you.</p>
            </article>
          </div>
        </section>

        <section className="meet-template-section meet-values" aria-labelledby="values-heading">
          <h2 id="values-heading">What I Hope GuardHaus Feels Like</h2>
          <div className="meet-values-card">
            <p>
              Use this space for a few words about the kind of community you want
              to build—welcoming, curious, brave, creative, or anything that
              matters most to you.
            </p>
            <div className="meet-values-divider">✿ ♡ ✿</div>
            <p className="meet-values-prompt">
              A reminder you want every visitor to take with them goes here.
            </p>
          </div>
        </section>

        <section className="meet-cta">
          <h2>Ready to Start Your Story?</h2>
          <p>Take the first step, one spin at a time.</p>
          <Link className="hero-button" to="/getting-started">
            🌸 Explore Getting Started
          </Link>
        </section>
      </main>
    </Layout>
  );
}

export default MeetBlanca;
