import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  useEffect(() => {
    document.title = `My Portfolio - ${currentPage}`;
  }, [currentPage]);

  const renderPage = () => {
    return currentPage === 'About Me' ? <About />
      : currentPage === 'Portfolio' ? <Portfolio />
      : currentPage === 'Contact' ? <Contact />
      : <Resume />;
  }

  const handlePageChange = page => setCurrentPage(page);

  return (
    <div>
      <Header handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
