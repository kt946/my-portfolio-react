import React from 'react';
import Navigation from '../Navigation';

function Header() {
  return(
    <header className='text-bg-dark d-flex'>
      <h1 id='name' className='text-white p-2'>
        <a href='/' className='text-decoration-none text-white ms-4'>
            Kyle Tang
        </a>
      </h1>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;