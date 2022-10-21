import React from 'react';
import Navigation from '../Navigation';
import Logo from '../../assets/images/logo512.png'

function Header({ categories, currentPage, handlePageChange }) {
  return(
    // section for Header component
    <header className="navbar navbar-expand-lg navbar-dark sticky-top py-1 px-2">
      <nav className="container-fluid">
        <a 
          href="#about" 
          className="navbar-brand d-flex align-items-center p-0"
          onClick={() => handlePageChange('About Me')}
        >
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-text-top me-2"
            alt="Portfolio logo"
          />
          <span className="mt-1">
            Kyle Tang
          </span>
        </a>
        {/* button menu toggle for mobile screen sizes */}
        <button 
          className="navbar-toggler text-white" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mobile-menu" 
          aria-controls="mobile-menu" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <i className="navbar-toggler-icon"></i>
        </button>
        {/* Navigation component */}
        <Navigation 
          categories={categories} 
          currentPage={currentPage} 
          handlePageChange={handlePageChange}
        />
      </nav>
    </header>
  );
}

export default Header;