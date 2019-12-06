import React, { Component } from 'react';
import {SlideDown} from 'react-slidedown'

import 'react-slidedown/lib/slidedown.css';
import './mobile-navigation.styles.scss';

export default class MobileNavigation extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true
    }
  }

  handleClick = event => {
    const { hidden } = this.state;
    event.preventDefault();
    this.setState({
      hidden: !hidden
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <div className="navbar">
        <div className="menu">
          <img onClick={this.handleClick} src="menu.svg" alt="menu" />
        </div>
        <SlideDown className="vertical-text-links">
          {!hidden ? ( 
            <div >
              <a href="#about-me">About Me</a>
              <a href="#skills">Skills</a>
              <a href="#applications">Applications</a>
              <a href="#contact-form">Contact Me</a>
              <a href="Michael_Eskarous_Resume.pdf">Resume</a>
            </div> ) : (
            null
          )}
        </SlideDown>
        <div>
        </div>
        <div className="mobile-image-links">
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
    )
  }
}

