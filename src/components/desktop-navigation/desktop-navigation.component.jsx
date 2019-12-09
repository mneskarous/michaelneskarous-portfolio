import React, { Component } from 'react';

import './desktop-navigation.styles.scss';

export default class DesktopNavigation extends Component {

  handleScroll = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-90px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  componentDidMount() {
    this.handleScroll();
  }

  render() {
    return (
      <div id="navbar"  className="desktop-navbar" >
        <div className="text-links">
          <a href="#top">Top</a>
          <a href="#about-me">About Me</a>
          <a href="#skills">Technical Skills</a>
          <a href="#applications">Applications</a>
          <a href="#contact-form">Contact Me</a>
          <a href="Michael_Eskarous_Resume.pdf">Resume</a>
        </div>
        <div className="image-links">
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