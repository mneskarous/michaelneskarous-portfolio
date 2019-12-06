import React from 'react';

import './intro.styles.scss';

const Intro = () => (
  <div className="intro">
    <div className="image-container">
      <img className="portrait" src="./DSC_4122_small.jpg"  alt="Michael Eskarous" />
    </div>
    <div className="intro-container">
      <h2>Hi! I'm Mike and I'm a software engineer!</h2> 
    </div>
  </div>
);

export default Intro;