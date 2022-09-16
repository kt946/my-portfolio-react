import React from 'react';

function Navigation(props) {
  const {
    categories = [],
    currentPage,
    handlePageChange
  } = props;

  return(
    <nav id='nav' className='navbar fs-4 mx-5'>
      <ul className='nav'>
        {categories.map((category) => (
          <li 
            className='nav-item mx-2 p-1'
            key={category.name}
          >
            <a
              href={`#${category.id}`}
              onClick={() => handlePageChange(category.name)}
              className={`nav-link ${currentPage === category.name && 'text-info'}`}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;