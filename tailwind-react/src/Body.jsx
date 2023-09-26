import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import About from './views/About.jsx';
import Contact from './views/Contact.jsx';
import Events from './views/Events.jsx';
import Films from './views/Films.jsx';
import Footer from './views/Footer.jsx';
import Header from './views/Header.jsx';
import MainContent from './views/MainContent.jsx';
import Mission from './views/Mission.jsx';
import Newsletter from './views/Newsletter.jsx';
import NotFound from './views/NotFound.jsx';
import Partners from './views/Partners.jsx';
import Schedule from './views/Schedule.jsx';
import SocialMedia from './views/SocialMedia.jsx';
import Team from './views/Team.jsx';
import Tickets from './views/Tickets.jsx';

const Body = () => {
  return (
    <div className="bg-aleviolet">
      <Router basename={import.meta.env.BASE_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="about" element={<About />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="socialmedia" element={<SocialMedia />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="mission" element={<Mission />} />
          <Route path="partners" element={<Partners />} />
          <Route path='films' element={<Films />} />
          <Route path='events' element={<Events />} />
          <Route path="*" element={<NotFound />} />
          <Route path="404" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Body;
