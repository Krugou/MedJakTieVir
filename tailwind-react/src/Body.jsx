import {useState} from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
const Body = () => {

  return (
    <body className="bg-aleviolet">
      <Header />
      <MainContent />
      <Footer />
    </body>
  );
};

export default Body;