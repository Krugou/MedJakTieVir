import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import About from './components/About.jsx';
import Schedule from './components/Schedule.jsx';
import Tickets from './components/Tickets.jsx';
import Footer from './views/Footer.jsx';
import Header from './views/Header.jsx';
import MainContent from './views/MainContent.jsx';
const Body = () => {
  return (
    <Router>
      <div className="bg-aleviolet">
        <Header />
        <Routes>
          <Route exact path="/" element={<MainContent />} >
          </Route>
          <Route path="/about" element={<About />} >
          </Route>
          <Route path="/schedule" element={<Schedule />} >
          </Route>
          <Route path="/tickets" element={<Tickets />} >
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};



export default Body;