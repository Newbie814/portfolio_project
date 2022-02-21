import React from 'react';
import myLogo from '../mw-logo8.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark py-0'>
      <div className='container'>
        <a className='navbar-brand ms-1' href='#'>
          <img className='logo' src={myLogo} alt='mw-solutions' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: 'rgb(44, 145, 170)' }}
          />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto me-1'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home <span className='sr-only'></span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About Me
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                History
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
