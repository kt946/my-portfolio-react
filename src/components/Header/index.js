import React from 'react';
import Navigation from '../Navigation';

function Header({ categories, currentPage, handlePageChange }) {
  return(
    <header className="sticky-top d-flex justify-content-between px-4 px-sm-5">
      <h1 id="name" className="my-auto fs-2">
        <a href="/" className="text-decoration-none link-light">
          Kyle Tang
        </a>
      </h1>
      <Navigation 
        categories={categories} 
        currentPage={currentPage} 
        handlePageChange={handlePageChange}
      />
    </header>
  );
}

export default Header;