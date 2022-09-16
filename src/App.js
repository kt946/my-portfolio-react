import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: 'About Me',
      id: 'about'
    },
    {
      name: 'Portfolio',
      id: 'portfolio'
    },
    {
      name: 'Contact',
      id: 'contact'
    },
    {
      name: 'Resume',
      id: 'resume'
    }
  ]);

  const [currentPage, setCurrentPage] = useState(categories[0].name);
  
  const renderPage = () => {
    return currentPage === 'About Me' ? <About />
      : currentPage === 'Portfolio' ? <Portfolio />
      : currentPage === 'Contact' ? <Contact />
      : <Resume />;
  };

  useEffect(() => {
    document.title = `My Portfolio - ${currentPage}`;
  }, [currentPage]);

  const handlePageChange = page => setCurrentPage(page);

  return (
    <div>
      <Header 
        categories={categories}
        currentPage={currentPage}
        handlePageChange={handlePageChange} 
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
