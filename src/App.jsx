import './App.css';
import ScrollToTop from './components/ScrollToTop';
import './mobile.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SectionGettingStarted from './pages/SectionGettingStarted';
import GettingStarted from './pages/GettingStarted';
import GettingStartedLessons from './pages/GettingStartedLessons';
import WhyGuardHaus from './pages/WhyGuardHaus';
import MeetBlanca from './pages/MeetBlanca';
import TemplatePage from './pages/TemplatePage';
import VideoPathwayPage from './pages/VideoPathwayPage';
import ContactFormPage from './pages/ContactFormPage';
import { pageTemplates } from './data/pageTemplates';

const isVideoPathway = (path) =>
  path.startsWith('/beyond-the-basics') || path.startsWith('/beginner-pathway') || path.startsWith('/blancas-corner');

const isContactForm = (path) => path.startsWith('/contact');

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/blancas-corner/getting-started" element={<SectionGettingStarted />} />
        <Route path="/beyond-the-basics/getting-started" element={<SectionGettingStarted />} />
        <Route path="/" element={<Home />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/why-guardhaus" element={<WhyGuardHaus />} />
        <Route path="/meet-blanca" element={<MeetBlanca />} />
        {Object.keys(pageTemplates).map((path) => (
          <Route
            key={path}
            path={path}
            element={
              path === "/beginner-pathway/start-here"
                ? <GettingStartedLessons />
                : isVideoPathway(path)
                ? <VideoPathwayPage />
                : isContactForm(path)
                  ? <ContactFormPage />
                  : <TemplatePage />
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
