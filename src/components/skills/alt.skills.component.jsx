import React, { Component } from 'react';

import SKILLS_DATA from './skills.data';

import './skills.styles.scss';

export default class Skills extends Component {
  constructor() {
    super();

    this.state = {
      skills: SKILLS_DATA,
      hidden: true
    }
  }

  handleClick = event => {
    event.preventDefault();
    this.setState ({
      hidden: false
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <div className="skills">
        <div className="header-container">
          <h2 id="skills">Skills</h2>
        </div>
        <div className="instructions-container">
          <h3>Click on the icon for the name</h3>
        </div>
        <div className="skills-container">
          <div className="skill-container">
            <img src="./images/JavaScript.png" alt="JavaScript logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">JavaScript</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img src="./images/HTML5.png" alt="HTML 5 logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">HTML5</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img src="./images/css3.jpg" alt="CSS 3 logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">CSS3</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img src="./images/Sass.png" alt="Sass logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">Sass</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img className="react-logo" src="./images/React.svg.png" alt="React logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">React</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img className="redux-logo" src="./images/Redux.svg" alt="Redux logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">Redux</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img src="./images/jQuery.svg" alt="jQuery logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">jQuery</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img className="nodejs-logo" src="./images/NodeJS.svg" alt="NodeJS logo" onClick={this.handleClick}></img>
              {!hidden ? (
                <div className="answer">JavaScript</div>
              ) : (
                null
              )}
          </div>
          <div className="skill-container">
            <img className="mongodb-logo" src="./images/MongoDB.png" alt="MongoDB logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">MongoDB</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img src="./images/MySQL.png" alt="MySQL logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">MySQL</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img className="postgresql-logo" src="./images/PostgreSQL.svg.png" alt="PostgreSQL logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">PostgreSQL</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img src="./images/Jest.png" alt="Jest logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">Jest</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img src="./images/Git.png" alt="Git logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">Git</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img className="npm-logo" src="./images/npm.png" alt="npm logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">npm</div>
            ) : (
              null
            )}
          </div>
          <div className="skill-container">
            <img className="webpack-logo" src="./images/webpack.svg" alt="webpack logo" onClick={this.handleClick}></img>
            {!hidden ? (
              <div className="answer">webpack</div>
            ) : (
              null
            )}
          </div>
        </div>
      </div>
    )
  }

}