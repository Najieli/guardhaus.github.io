import { Link, useLocation } from 'react-router-dom';
import HeroHeader from '../components/HeroHeader';
import Layout from '../layouts/Layout';
import Navbar from '../components/Navbar';

const cornerLessons = [
  ['flexibility-101', 'Flexibility 101', 'Make space for movement with gentle, consistent flexibility practice.'],
  ['handbalancing-101', 'Handbalancing 101', 'Explore balance, body awareness, and your upside-down shapes.'],
  ['acro-101', 'Acro 101', 'Get to know the foundations behind acrobatic movement.'],
  ['strength-conditioning', 'Strength & Conditioning', 'Build the strength and control that support your movement.'],
];
const beyondLessons = [
  ['warm-up-exercises', 'Warm Up Exercises', 'Give yourself time to get ready before working on your skills.'],
  ['advanced-skills', 'Advanced Skills', 'Build on familiar foundations and explore your next challenge.'],
  ['combo-routines', 'Combo Routines', 'Connect your skills and make them flow, one phrase at a time.'],
];

export default function SectionGettingStarted() {
  const isCorner = useLocation().pathname.startsWith('/blancas-corner');
  const title = isCorner ? 'Blanca’s Corner 🌟' : 'Beyond the Basics 🌟';
  const base = isCorner ? '/blancas-corner' : '/beyond-the-basics';
  const lessons = isCorner ? cornerLessons : beyondLessons;
  return <Layout>
    <HeroHeader title={title} subtitle="A new little chapter on your lavender path ♡" />
    <Navbar />
    <main className="getting-started-lessons">
      <section className="first-lesson">
        <h2>Welcome, bestie!</h2>
        <p>{isCorner
          ? 'This is where we explore the movement beyond the equipment. From flexibility to balance and strength, let’s build the foundations that help you feel more at home in your body.'
          : 'Feeling comfortable with your foundations? Let’s give them somewhere to grow. This is your space to explore new skills and bring everything together.'}</p>
        <p>{isCorner
          ? 'Choose a focus that sparks your curiosity, take your time, and work at your own pace. For unfamiliar acro or handbalancing skills, practice with a qualified coach.'
          : 'Start with a warm-up, choose a skill that builds on what you already know, and try a combo when you feel ready. You can always revisit the basics along the way.'}</p>
      </section>
      <section className="first-lesson" aria-labelledby="choose-focus">
        <h2 id="choose-focus">Find your first little step.</h2>
        <div className="section-start-links">
          {lessons.map(([slug, title, description]) => <Link key={slug} to={`${base}/${slug}`}>
            <h3>{title} <span aria-hidden="true">→</span></h3>
            <p>{description}</p>
          </Link>)}
        </div>
      </section>
      <section className="first-lessons-next" aria-labelledby="next-step-title">
        <svg className="first-lessons-ribbon" viewBox="0 0 240 120" aria-hidden="true" focusable="false">
          <path d="M120 0 C120 25 65 20 65 55 S175 75 175 95 S120 100 120 120" />
          <text x="120" y="68" textAnchor="middle">✿</text>
        </svg>
        <p className="video-lesson-label">NEXT ON THE LAVENDER PATH</p>
        <h2 id="next-step-title">Let’s get moving.</h2>
        <Link className="hero-button" to={`${base}/${lessons[0][0]}`}>Continue to {lessons[0][1]} →</Link>
        <Link className="first-lessons-roadmap" to="/getting-started">Explore the full lavender path ♡</Link>
      </section>
    </main>
  </Layout>;
}
