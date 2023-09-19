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
      <Header />
      <Router>
        <Routes>
          <Route exact path="/react" element={<MainContent />} >
          </Route>
          <Route path="/react/about" element={<About />} >
          </Route>
          <Route path="/react/schedule" element={<Schedule />} >
          </Route>
          <Route path="/react/tickets" element={<Tickets />} >
          </Route>
          <Route path="/react/*" element={<NotFound />} >
          </Route>
          <Route path="/react/404" element={<NotFound />} >
          </Route>
          <Route path="/react/team" element={<Team />} >
          </Route>
          <Route path="/react/contact" element={<Contact />} >  </Route>
          <Route path="/react/socialmedia" element={<SocialMedia />} >  </Route>
          <Route path="/react/newsletter" element={<Newsletter />} >  </Route>
          <Route path="/react/mission" element={<Mission />} >  </Route>
          <Route path="/react/partners" element={<Partners />} >  </Route>
          <Route path='/react/films' element={<Films />} >  </Route>
          <Route path='/react/events' element={<Events />} >  </Route>
        </Routes>
      </Router>
      <Footer />
    </div>

  );
};



export default Body;