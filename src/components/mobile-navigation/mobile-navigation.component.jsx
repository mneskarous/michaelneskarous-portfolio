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

  handleClick = () => {
    const { hidden } = this.state;
    this.setState({
      hidden: !hidden
    });
  }

  handleScroll = () => {
    var prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-90px";
      }
      prevScrollPos = currentScrollPos;
    }
  }

  componentDidMount() {
    this.handleScroll();
  }

  render() {
    const { hidden } = this.state;
    return (
      <div id="navbar" className="navbar">
        <div className="menu">
          <img onClick={this.handleClick} src="./images/menu.svg" alt="menu" />
        </div>
          <SlideDown className="vertical-text-links">
            {!hidden ? ( 
              <div >
                <a href="#about-me" onClick={this.handleClick}>About Me</a>
                <a href="#skills" onClick={this.handleClick}>Skills</a>
                <a href="#applications" onClick={this.handleClick}>Applications</a>
                <a href="#contact-form" onClick={this.handleClick}>Contact Me</a>
                <a href="Michael_Eskarous_Resume.pdf">Resume</a>
              </div> ) : (
              null
            )}
          </SlideDown>
        <div>
        </div>
        <div className="mobile-image-links">
          <a href="https://www.linkedin.com/in/michaelneskarous/">
            <img src="./images/linkedin.svg" alt="linkedin link" />
          </a>
          <a href="https://github.com/mneskarous">
            <img src="./images/github.svg" alt="github link" />
          </a>
          <a href="mailto:michaelneskarous@gmail.com">
            <img src="./images/email.svg" alt="email link" />
          </a>
        </div>
      </div>
    );
  }
}

