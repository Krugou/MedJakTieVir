import {useState} from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import MainContent from './MainContent.jsx';
const App = () => {

  return (
    <body className="bg-aleviolet">
      <Header />
      <MainContent />
      <Footer />
    </body>
  );
};

export default App;