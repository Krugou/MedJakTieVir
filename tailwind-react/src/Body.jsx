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
          <Route exact path="/" element={<MainContent />} >
          </Route>
          <Route path="/about" element={<About />} >
          </Route>
          <Route path="/schedule" element={<Schedule />} >
          </Route>
          <Route path="/tickets" element={<Tickets />} >
          </Route>
          {/* <Route path="*" element={<NotFound />} >
          </Route> */}
          <Route path="/404" element={<NotFound />} >
          </Route>
          <Route path="/team" element={<Team />} >
          </Route>
          <Route path="/contact" element={<Contact />} >  </Route>
          <Route path="/socialmedia" element={<SocialMedia />} >  </Route>
          <Route path="/newsletter" element={<Newsletter />} >  </Route>
          <Route path="/mission" element={<Mission />} >  </Route>
          <Route path="/partners" element={<Partners />} >  </Route>
          <Route path='/films' element={<Films />} >  </Route>
          <Route path='/events' element={<Events />} >  </Route>
        </Routes>
      </Router>
      <Footer />
    </div>

  );
};



export default Body;