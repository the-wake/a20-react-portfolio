import React, {useState} from 'react'
import Blurb from './Blurb.js';
import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Portfolio from './Portfolio.js';

function ContentContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    } else {
      return <Blurb />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <Banner />
      <div id=" " />
      {renderPage()}
    </div>
  )
}

export default ContentContainer;
