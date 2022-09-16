import React from 'react';
import Navigation from '../Navigation';

function Header({ handlePageChange }) {
  return(
    <header className='text-bg-dark d-flex justify-content-between px-3'>
      <h1 id='name' className='p-2'>
        <a href='/' className='text-decoration-none text-white ms-4'>
            Kyle Tang
        </a>
      </h1>
      <Navigation handlePageChange={handlePageChange}></Navigation>
    </header>
  );
}

export default Header;