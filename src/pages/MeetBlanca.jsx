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
            <h2>Hi Bestie!</h2>
            <p>I’m a forever color guard girlie at heart, a dance lover, a circus lover, and the person behind GuardHaus. I created this little corner of the internet because learning guard should feel exciting, straightforward, and accessible—you don’t have to figure it all out alone. Whether you’re picking up a flag for the first time or chasing your next big skill, I’m here to cheer you on through every spin, toss, catch, and drop.</p>
            <p className="meet-signoff">Let’s grow together. ♡</p>
          </div>
        </section>

        <section className="meet-template-section" aria-labelledby="story-heading">
          <h2 id="story-heading">My Guard Story</h2>
          <article className="meet-template-card story-card personal-story">
            <p>The first time I heard about colorguard was through a decorative flyer for incoming freshmen at the nearby high school. I didn’t know exactly what it was, but I knew costumes, makeup, and potentially tons of hairspray would be involved. I was hooked! High school colorguard became my life. I loved everything about it. Spinning flags and weapons, dancing, and most importantly, performing. I loved it so much that I decided to audition for my first world-class colorguard after I graduated high school: Imbue Winterguard.</p>
            <p>I marched with Imbue Winterguard from 2014-2017. These times were some of the most challenging for me, but also the most rewarding. The impact it had on me carries with me to this day in the way I understand movement and my love for dance. I took some time off and auditioned for another world-class color guard near me: Diamante.</p>
            <p>I marched with Diamante in 2020 and 2022. Although my time was shorter with this organization, it was everything to me. As an acrobatic person by nature, I felt that I fit right in (like a glove) with their daring acrobatic winterguard shows. They constantly pushed and evolved the sport of colorguard and what was possible. For the first time, I was also surrounded by many others who were just as acrobatic as I was, which was incredible. I was in love. I finished my final marching season with Diamante in 2022 with one of the best WGI finals nights of my life. We had the privilege of being the last performance of the night, and needless to say, it was one of the most magical 7 minutes that I will forever remember for the rest of my life.</p>
            <p>Today I coach high school color guard, and that has been its own challenging but rewarding journey. I love being a part of training and inspiring the next generation of color guard aficionados, and I hope to do that for as long as I can.</p>
          </article>
        </section>

        <section className="meet-template-section" aria-labelledby="favorites-heading">
          <h2 id="favorites-heading">A Few of My Favorites</h2>

          <div className="meet-favorites-grid">
            <article className="meet-template-card favorite-card favorite-card-pink">
              <span>♡ FAVORITE SKILL</span>
              <ul className="favorite-skills-list">
                <li>Single and half 45 on flag with a sauté underneath.</li>
                <li>Barrel turns</li>
                <li>Double stags</li>
              </ul>
            </article>
            <article className="meet-template-card favorite-card favorite-card-lilac">
              <span>✿ FAVORITE GUARD MEMORY</span>
              <p>Hearing the cheers of the arena in Dayton finals after my partner and I finished handstand walking from the edge of the floor to the center. It was electrifying.</p>
            </article>
            <article className="meet-template-card favorite-card favorite-card-cream">
              <span>✦ OUTSIDE OF GUARD</span>
              <p>I love hand balancing and contortion; however, after having a baby, I’m taking it easier these days. I also love coffee—like, obsessed. My dream is to get a college degree, so I’m attending community college, and I’m also getting married soon!</p>
            </article>
          </div>
        </section>

        <section className="meet-template-section meet-values" aria-labelledby="values-heading">
          <h2 id="values-heading">What I Hope GuardHaus Feels Like</h2>
          <div className="meet-values-card">
            <p>I hope GuardHaus feels like a convenient one-stop shop to learn everything you need to know to be successful, whether it be your high school color guard team or your first time in an independent color guard. I’ve got you the whole way!</p>
            <div className="meet-values-divider" aria-hidden="true">✿ ♡ ✿</div>
            <p>I also want this to feel like the space we’ve all been waiting for, where we can celebrate each other and share resources and knowledge. A colorguard guardhub for all of us.</p>
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
