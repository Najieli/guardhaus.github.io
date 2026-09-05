import { Link, useLocation } from "react-router-dom";
import HeroHeader from "../components/HeroHeader";
import Layout from "../layouts/Layout";
import Navbar from "../components/Navbar";
import { pageTemplates } from "../data/pageTemplates";

function TemplatePage() {
  const { pathname } = useLocation();
  const page = pageTemplates[pathname];

  if (!page) return null;

  return (
    <Layout>
      <HeroHeader title={page.title} subtitle={page.subtitle} />
      <Navbar />

      <main className="template-page">
        <section className="template-welcome">
          <div className="template-welcome-flower flower-left">✿</div>
          <div className="template-welcome-flower flower-right">✦</div>
          <p className="template-eyebrow">YOUR PAGE TEMPLATE</p>
          <h2>This little corner is waiting for you.</h2>
          <p>{page.intro}</p>
          <p className="template-edit-note">Edit the prompts below whenever you’re ready to make it your own. ♡</p>
        </section>

        <section className="template-content" aria-labelledby="template-content-heading">
          <h2 id="template-content-heading">Start Building This Page</h2>
          <p>Each card is a place to add your own words, links, photos, videos, or resources.</p>

          <div className="template-prompt-grid">
            {page.prompts.map((prompt, index) => (
              <article className={`template-prompt-card template-prompt-${index + 1}`} key={prompt}>
                <span>{index + 1}</span>
                <h3>{prompt}</h3>
                <p>Add a short introduction, a favorite tip, or the next thing you want visitors to discover here.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="template-photo-section">
          <div className="template-photo-frame" aria-label="Content or photo placeholder">
            <span>Photo, video, or resource</span>
            <small>add something lovely here</small>
          </div>
          <div className="template-photo-copy">
            <h2>Make it feel like you.</h2>
            <p>Use this spot for a featured image, a video, a downloadable guide, a favorite quote, or anything that brings this page to life.</p>
          </div>
        </section>

        <section className="template-cta">
          <h2>Not sure where to begin?</h2>
          <p>Your beginner pathway is always here when you need it.</p>
          <Link className="hero-button" to="/getting-started">🌸 Visit Getting Started</Link>
        </section>
      </main>
    </Layout>
  );
}

export default TemplatePage;
