import React from 'react';

import Navbar from './components/navbar/navbar.component';
import Intro from './components/intro/intro.component';
import AboutMe from './components/about-me/about-me.component';
import Skills from './components/skills/skills.component';
import Applications from './components/applications/applications.component';
import ContactForm from './components/contact-form/contact-form.component';
import Footer from './components/footer/footer.component';

import './App.scss';


function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="content">
        <div className="intro-container">
          <Intro />
        </div>
        <div className="about-me-container">
          <AboutMe />
        </div>
        <div className="skills-container">
          <Skills />
        </div>
        <div className="applications-container">
          <Applications />
        </div>
        <div className="contact-form-container">
          <ContactForm />
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
