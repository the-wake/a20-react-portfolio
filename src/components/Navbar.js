import React from 'react';
import Button from '@mui/material/Button';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar sticky-top">
      <li className="nav-item">
        <Button
        className="nav-button"
        size="large"
        variant="contained"
        href="#/portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Button>
      </li>
      <li className="nav-item">
        <a
          href="# "
          onClick={() => handlePageChange('Biography')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >Portfolio</a>
      </li>
      {/* <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >Contact</a>
      </li> */}
    </ul>
  );
}

export default Navbar;
