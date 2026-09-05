import { Link, useLocation } from "react-router-dom";
import HeroHeader from "../components/HeroHeader";
import Layout from "../layouts/Layout";
import Navbar from "../components/Navbar";
import { pageTemplates } from "../data/pageTemplates";

const beginnerLessons = [
  ["Foundation One", "Start here", "Meet the basics, learn the shapes, and get comfortable before adding speed."],
  ["Foundation Two", "Build the skill", "Layer the next detail onto what you already know—one little win at a time."],
  ["Foundation Three", "Practice with purpose", "Use a focused drill to make the skill feel more natural and confident."],
  ["Put It Together", "Your next step", "Combine your foundations into a tiny phrase, combo, or practice challenge."],
];

const cornerLessons = [
  ["Prep Your Body", "Warm up first", "Begin with the mobility, activation, and safety notes that set up your practice."],
  ["Build the Foundation", "Find your shape", "Learn the key positions and simple drills before moving into bigger skills."],
  ["Strength & Control", "Make it steady", "Add intentional conditioning and practice details to support your progress."],
  ["Explore & Grow", "Your next step", "Use your foundations to explore a new variation, flow, or challenge."],
];

const beginnerChallenges = [
  ["Toss & Catch Challenge", "Try a friendly little toss challenge and celebrate every catch."],
  ["Detail Challenge", "Pick one small technique detail and make it sparkle."],
  ["Confidence Challenge", "A tiny practice prompt for showing up brave."],
  ["Creative Challenge", "Play with a new shape, pathway, or movement idea."],
];

const cornerChallenges = [
  ["Flexibility Flow", "A feel-good stretch challenge for your next training day."],
  ["Balance Challenge", "A playful balance drill to test your control."],
  ["Strength Challenge", "A short strength burst for building your foundations."],
  ["Shape Challenge", "Explore a new line, shape, or transition with intention."],
];

const beginnerCombos = [
  ["Build-a-Combo No. 1", "A sweet little phrase made from your first foundations."],
  ["Practice Floor Combo", "Connect familiar skills into a simple practice routine."],
  ["Level-Up Routine", "A longer combo for when you want a new challenge."],
];

const cornerCombos = [
  ["Mini Movement Flow", "A short flow to warm up, play, and connect your shapes."],
  ["Strength + Shape Combo", "Bring control and artistry together in one little routine."],
  ["Challenge Flow", "A bigger sequence for when you’re ready to explore."],
];

function VideoRail({ title, subtitle, videos, variant }) {
  return (
    <section className={`video-carousel-section ${variant}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className="video-carousel-hint">scroll for more ♡ →</div>
      <div className="video-carousel" aria-label={title}>
        {videos.map(([videoTitle, description], index) => (
          <article className="video-carousel-card" key={videoTitle}>
            <div className="video-carousel-frame" aria-label={`${videoTitle} video coming soon`}>
              <span className="video-play-icon">▶</span>
              <strong>Coming soon</strong>
            </div>
            <p className="video-carousel-number">{String(index + 1).padStart(2, "0")}</p>
            <h3>{videoTitle}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function VideoPathwayPage() {
  const { pathname } = useLocation();
  const page = pageTemplates[pathname];
  const isCorner = pathname.startsWith("/blancas-corner");
  const lessons = isCorner ? cornerLessons : beginnerLessons;
  const challenges = isCorner ? cornerChallenges : beginnerChallenges;
  const combos = isCorner ? cornerCombos : beginnerCombos;

  if (!page) return null;

  return (
    <Layout>
      <HeroHeader title={page.title} subtitle={page.subtitle} />
      <Navbar />

      <main className="video-pathway-page">
        <section className="video-pathway-intro">
          <p className="video-pathway-eyebrow">YOUR STEP-BY-STEP VIDEO PATH</p>
          <h2>Build it from the ground up.</h2>
          <p>{page.intro}</p>
          <p className="video-pathway-note">Start at lesson one, take your time, and let each foundation support the next. ♡</p>
        </section>

        <section className="video-pathway-lessons" aria-labelledby="video-pathway-heading">
          <h2 id="video-pathway-heading">Your Lesson Path</h2>
          <p className="video-pathway-direction">Follow the lavender line—every lesson builds on the one before it.</p>

          <div className="video-lesson-track">
            {lessons.map(([title, label, description], index) => (
              <article className="video-lesson" key={title}>
                <div className="video-lesson-number">{index + 1}</div>
                <div className="video-lesson-card">
                  <div className="video-coming-soon" aria-label={`${title} video coming soon`}>
                    <span className="video-play-icon">▶</span>
                    <strong>Video coming soon</strong>
                    <small>{label}</small>
                  </div>
                  <div className="video-lesson-copy">
                    <p className="video-lesson-label">LESSON {index + 1}</p>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <VideoRail
          title="Just for Fun: Challenge Carousel"
          subtitle="Quick little video challenges for the days you want to play, try something new, and feel proud of yourself."
          videos={challenges}
          variant="challenge-carousel"
        />

        <VideoRail
          title="Combo Routines"
          subtitle="When you’re ready to connect your skills, these short routines will give you something lovely to work toward."
          videos={combos}
          variant="combo-carousel"
        />

        <section className="video-pathway-closing">
          <div>✿</div>
          <h2>More lessons are on the way.</h2>
          <p>For now, save this page and come back when you’re ready for the next little step.</p>
          <Link className="hero-button" to="/getting-started">🌸 Back to Getting Started</Link>
        </section>
      </main>
    </Layout>
  );
}

export default VideoPathwayPage;
