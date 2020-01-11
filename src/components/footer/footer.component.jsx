import React from 'react';

import './footer.styles.scss';

const Footer = () => (
  <div className="footer">
    <div className="copyright">
    	&copy; 2020 Design & build by Michael Eskarous
    </div>
    <div className="footer-image-links">
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

export default Footer;