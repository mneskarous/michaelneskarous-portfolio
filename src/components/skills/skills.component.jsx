import React, { Component } from 'react';

import SKILLS_DATA from './skills.data';
import SkillItem from '../skill-item/skill-item.component';

import './skills.styles.scss';

export default class Skills extends Component {
  constructor() {
    super();

    this.state = {
      skills: SKILLS_DATA,
    }
  }

  handleClick = event => {
    event.preventDefault();
    this.setState ({
      hidden: false
    });
  }

  render() {
    const { skills } = this.state;
    return (
      <div className="skills">
        <div id="skills" className="header-container">
          <h2>Skills</h2>
        </div>
        <div className="instructions-container">
          <h3>Click on the icon for the name</h3>
        </div>
        <div className="skills-container">
          {
            skills.map(skill => (
              <SkillItem skill={skill} key={skill.id} />
            ))
          }
        </div>
      </div>
    )
  }

}