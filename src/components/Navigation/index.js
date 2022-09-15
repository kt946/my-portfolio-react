import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const categories = [
  {
    name: 'about me'
  },
  {
    name: 'portfolio'
  },
  {
    name: 'contact'
  },
  {
    name: 'resume'
  }
];

function categorySelected(name) {
  console.log(`${name} clicked`)
}

function Navigation() {
  return(
    <nav id='nav' className='navbar fs-4'>
      <ul className='nav d-flex align-items-center'>
        {categories.map((category) => (
          <li 
            className='nav-item mx-2 p-1'
            key={category.name}
          >
            <span onClick={() => categorySelected(category.name)}>
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;