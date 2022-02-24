import React from 'react';
import image from '../assets/at.png'

function Blurb() {
  return (
    <div className="container blurb-container">
      <div id="pfp-container">
        <img src={image} id="profile-pic" />
      </div>
      <div id="blurb">
        <p>
          This is where the blurb goes.
        </p>
      </div>
    </div>
  )
}

export default Blurb;
