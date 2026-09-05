import { Link } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';
import Layout from '../layouts/Layout';
import Navbar from '../components/Navbar';

const lessons = [
  ['What Is Colorguard?', 'Get to know the equipment, the movement, and the magic that brings it all together.'],
  ['Getting Ready', 'What to bring, what to wear, and a little encouragement for your first practice.'],
];

export default function GettingStartedLessons() {
  return <Layout>
    <HeroHeader title="Getting Started" subtitle="Your first spin starts now 🌟" />
    <Navbar />
    <main className="getting-started-lessons">
      <p className="first-lessons-welcome">Two little steps to begin your journey. Take your time, bestie. ♡</p>
      {lessons.map(([title, description], index) => <section className="first-lesson" key={title} aria-labelledby={`first-lesson-${index}`}>
        <div className="first-lesson-number" aria-hidden="true">{index + 1}</div>
        <h2 id={`first-lesson-${index}`}>{title}</h2>
        <p>{description}</p>
        <div className="first-lesson-videos">
          {[1, 2, 3, 4].map((number) => <div className="first-lesson-video" key={number} role="group" aria-label={`${title}: video ${number}`}>
            <span aria-hidden="true">✿</span>
            <h3>Video {number}</h3>
            <strong>Coming soon</strong>
            <small>A little lesson is on its way.</small>
          </div>)}
        </div>
      </section>)}
      <section className="first-lessons-next" aria-labelledby="next-step-title">
        <svg className="first-lessons-ribbon" viewBox="0 0 240 120" aria-hidden="true" focusable="false">
          <path d="M120 0 C120 25 65 20 65 55 S175 75 175 95 S120 100 120 120" />
          <text x="120" y="68" textAnchor="middle">✿</text>
        </svg>
        <p className="video-lesson-label">NEXT ON THE LAVENDER PATH</p>
        <h2 id="next-step-title">Let’s pick up a flag.</h2>
        <p>Ready for your next little step? Your first flag foundations are waiting.</p>
        <Link className="hero-button" to="/beginner-pathway/flag-basics">Continue to Flag Basics →</Link>
        <Link className="first-lessons-roadmap" to="/getting-started">Explore the full lavender path ♡</Link>
      </section>
    </main>
  </Layout>;
}
