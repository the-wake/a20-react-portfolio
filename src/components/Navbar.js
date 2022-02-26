import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Would like to have the gradient and text color change when hovered, but it's hard to overwrite the CDN styles.
const NavButton = styled(Button)(() => ({
  width: 300,
  height: 100,
  fontSize: 16,
  background: 'radial-gradient(circle, rgba(46,49,52,1) 0%, rgba(93,20,20,1) 100%);',
  borderRadius: 20,
  fontSize: 24,
  color: '#DEDEDE',
  boxShadow: '2px 2px black',
  margin: 'auto',
}));

// Could add js to make the page scroll to this y-coord when clicked.
function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="sticky-top custom-navbar">
      <div className="nav-item">
        <NavButton id="portfolio"
        className="nav-button"
        size="large"
        variant="contained"
        href="#/portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</NavButton>
      </div>
      <div className="nav-item">
        <NavButton className="nav-button"
        size="large"
        variant="contained"
        href="#/portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</NavButton>
      </div>
      <div className="nav-item">
        <NavButton className="nav-button"
        size="large"
        variant="contained"
        href="#/portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</NavButton>
      </div>
    </div>
  );
}

export default Navbar;
