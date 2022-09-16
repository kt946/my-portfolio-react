import React from 'react';

function Navigation({ handlePageChange }) {
  const categories = [
    {
      name: 'About Me'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    }
  ];

  return(
    <nav id='nav' className='navbar fs-4 mx-5'>
      <ul className='nav'>
        {categories.map((category) => (
          <li 
            className='nav-item mx-2 p-1'
            key={category.name}
          >
            <span onClick={() => handlePageChange(category.name)}>
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;