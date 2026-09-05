import './App.css';
import './mobile.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import WhyGuardHaus from './pages/WhyGuardHaus';
import MeetBlanca from './pages/MeetBlanca';
import TemplatePage from './pages/TemplatePage';
import VideoPathwayPage from './pages/VideoPathwayPage';
import ContactFormPage from './pages/ContactFormPage';
import { pageTemplates } from './data/pageTemplates';

const isVideoPathway = (path) =>
  path.startsWith('/beginner-pathway') || path.startsWith('/blancas-corner');

const isContactForm = (path) => path.startsWith('/contact');

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/why-guardhaus" element={<WhyGuardHaus />} />
        <Route path="/meet-blanca" element={<MeetBlanca />} />
        {Object.keys(pageTemplates).map((path) => (
          <Route
            key={path}
            path={path}
            element={
              isVideoPathway(path)
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
