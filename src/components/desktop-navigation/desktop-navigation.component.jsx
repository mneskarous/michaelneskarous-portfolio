import React from 'react';

import './desktop-navigation.styles.scss';

const DesktopNavigation = (props) => (
  <div className="navbar">
    {/* Logo */}
    <div className="text-links">
      <a href="#about">About Me</a>
      <a href="#skills">Skills</a>
      <a href="#Applications">Applications</a>
      <a href="#contact-form">Contact Form</a>
      <a href="#resume">Resume</a>
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

export default DesktopNavigation;
