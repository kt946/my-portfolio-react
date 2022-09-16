import React from 'react';
import Navigation from '../Navigation';

function Header({ categories, currentPage, handlePageChange }) {
  return(
    <header className='text-bg-dark d-flex justify-content-between px-3'>
      <h1 id='name' className='p-2'>
        <a href='/' className='text-decoration-none text-white ms-4'>
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