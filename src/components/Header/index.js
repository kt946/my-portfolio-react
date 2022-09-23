import React from 'react';
import Navigation from '../Navigation';

function Header({ categories, currentPage, handlePageChange }) {
  return(
    <header className="navbar navbar-expand-lg navbar-dark sticky-top">
        <nav className="container-fluid">
          <h1 className="mb-0">
            <a href="/" className="navbar-brand fs-2 mx-3">
              Kyle Tang
            </a>
          </h1>
          <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list"></i>
          </button>
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