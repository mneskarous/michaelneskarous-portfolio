import React from 'react';

import './mobile-navigation.styles.scss';

const MobileNavigation = (props) => (
  <div className="navbar">
    <div className="menu">
      <img src="menu.svg" alt="menu" />
    </div>
    <div className="image-links">
      <a href="https://www.linkedin.com/in/michaelneskarous/">
        <img src="linkedin.svg" alt="linkedin link" />
      </a>
      <a href="https://github.com/mneskarous">
        <img src="github.svg" alt="github link" />
      </a>
      <a href="mailto:michaelneskarous@gmail.com">
        <img src="email.svg" alt="email link" />
      </a>
    </div>
  </div>
);

export default MobileNavigation;
