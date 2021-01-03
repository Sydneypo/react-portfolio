import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [ currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'Portfolio':
        return <Portfolio></Portfolio>;
      case 'Contact':
        return <Contact></Contact>
      default: 
        return <About></About>;
    }
  };

  return (
    <div>
      <Nav currentPage={ currentPage } handlePageChange={handlePageChange} />
      <div>
        {
          renderPage(currentPage)
        }
      </div>
      <main>
      </main>
    </div>
  );
}

export default App;
