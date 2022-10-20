// import React and components
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  // array of sections for Navigation component
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

  // set default page to About Me section
  const [currentPage, setCurrentPage] = useState(categories[0].name);
  
  // function to render pages based on currentPage
  const renderPage = () => {
    return currentPage === 'About Me' ? <About />
      : currentPage === 'Portfolio' ? <Portfolio />
      : currentPage === 'Contact' ? <Contact />
      : <Resume />;
  };

  // change title of browser tab
  useEffect(() => {
    document.title = `Kyle Tang - ${currentPage}`;
  }, [currentPage]);

  // function to set current page
  const handlePageChange = page => setCurrentPage(page);

  return (
    <div className="app-container d-flex flex-column">
      {/* Header component */}
      <Header 
        categories={categories}
        currentPage={currentPage}
        handlePageChange={handlePageChange} 
      />
      <main className="custom-bg-color">
        {/* render pages here */}
        {renderPage()}
      </main>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
