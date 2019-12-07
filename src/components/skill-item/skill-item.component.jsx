import React, { Component } from 'react';

import './skill-item.styles.scss';

export default class SkillItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
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
   const { skill } = this.props;
    return (
        <div className="skill-container">
          <img src={skill.imageUrl} alt={skill.alt} onClick={this.handleClick}></img>
          {!hidden ? (
            <div className="answer">{skill.answer}</div>
          ) : (
            null
          )}
        </div>
    );
  }
}
