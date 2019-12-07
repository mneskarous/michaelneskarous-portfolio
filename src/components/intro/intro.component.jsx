import React from 'react';

import './intro.styles.scss';

const Intro = () => (
  <div className="intro">
    <div className="image-container">
      <img className="portrait" src="./images/portrait.jpg"  alt="Michael Eskarous" />
    </div>
    <div className="intro-container">
      <h2 className="animate-flicker ">Welcome to Michael Eskarous' Portfolio!</h2> 
    </div>
  </div>
);

export default Intro;