import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import resume from '../assets/resume.pdf';

// Would like to have the gradient and text color change when hovered.
// Could add js to make the page scroll to this y-coord when clicked.
function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="custom-navbar">
      <div
        className="nav-item" id="about" href="#/about"
        className={currentPage === 'About' ? 'nav-item active' : 'nav-item'}
        onClick={() => handlePageChange('About')}>
          About Me
      </div>
      <div
        className="nav-item" id="portfolio" href="#/portfolio"
        className={currentPage === 'Portfolio' ? 'nav-item active' : 'nav-item'}
        onClick={() => handlePageChange('Portfolio')}>
          Portfolio
      </div>
      <div
        className="nav-item" id="contact" href="#/contact"
        className={currentPage === 'Contact' ? 'nav-item active' : 'nav-item'}
        onClick={() => handlePageChange('Contact')}>
          Contact
      </div>
      <div
        className="nav-item" id="resume">
        <a href={resume} download="Ben Martin Résumé">
          Résumé</a>
      </div>
    </div>
  );
}

export default Navbar;



// const NavButton = styled(Button)(() => ({
//   width: 300,
//   height: 100,
//   fontSize: 16,
//   background: 'radial-gradient(circle, rgba(46,49,52,1) 0%, rgba(93,20,20,1) 100%);',
//   borderRadius: 20,
//   fontSize: 24,
//   color: '#DEDEDE',
//   boxShadow: '2px 2px black',
//   margin: 'auto',
// }));