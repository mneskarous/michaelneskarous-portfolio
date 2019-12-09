import React, { Component } from 'react';
import AnthropologieCarousel from '../anthropologie-carousel/anthropologie-carousel.component';
import LalalimeCarousel from '../lalalime-carousel/lalalime-carousel.component';
import MemoryGameCarousel from '../memory-game-carousel/memory-game-carousel.component';

import './applications.styles.scss';

export default class Applications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // images: IMAGE_DATA,
      // anthropologieImages: ANTHROLOGIE_IMAGES_DATA, 
      // lalalimeImages: LALALIME_IMAGES_DATA, 
      // memoryGameImages: MEMORY_GAME_IMAGES_DATA,
      // arrowNext: arrowNext,
      // arrowPrev: arrowPrev
    }
  }

  render() {
     return (
      <div id="applications" className="applications">
        <div className="header-container">
          <h2>Applications</h2>
        </div>
        <div className="applications-container">
          <div className="application">
            <div className="application-title">
              Fitness Tracker: A responsive, mobile-first web app that allows users to keep track of their fitness progress in various exercise categories
            </div>
            <div className="application-tech">
              HTML5 / CSS3 / React / RESTful API / Node / Express / MongoDB / Mongoose / Git / npm / webpack
            </div>
            <div className="application-body">
              <div className="application-image-container">
                <img className="application-image-container" src="./images/fitness-tracker/MVP-Demo-1.gif" alt="MVP Demo"/>
              </div>
              <ul className="feature-list">
                <li>Contributed to the planning of functionality in addition to component structure and visual style of application</li>
                <li>Constructed database schema to persist data</li>
                <li>Utilized React State and conditional rendering to allow users to input and view their fitness data</li>
              </ul>
            </div>
          </div>
          <div className="application">
            <div className="application-title">
              LalaLime Review Section: A functional front-end replica of the LuluLemon Review Section
            </div>
            <div className="application-tech">
            HTML5 / CSS3 / React / ReactCSSTransitionGroup API / jQuery / RESTful API / Node / Express / MongoDB / Mongoose / Jest / Enzyme / Git / npm / webpack
            </div>
            <div className="application-body">
              <LalalimeCarousel />
              <ul className="feature-list">
                <li>Utilized React state and conditional rendering to create dropdown menus to filter and sort reviews and popups containing a user's profile and a review feedback form</li>
                <li>Constructed a proxy server to utilize service-oriented architecture to render full product page</li>
                <li>Employed Agile methodology to collaborate with fellow team members to combine microservices</li>
              </ul>
            </div>
          </div>
          <div className="application">
            <div className="application-title">
              Anthropologie Main Product Section: System design mock-up of the Anthropologie Main Product Section
            </div>
            <div className="application-tech">
            Node / Express / MongoDB / Mongoose / PostgreSQL / Sequelize / Artillery / Loader.io / New Relic / NGINX / AWS / npm / Ubuntu Server
            </div>
            <div className="application-body">
              <AnthropologieCarousel />
              <ul className="feature-list">
                <li>Benchmarked and optimized SQL and NoSQL databases to produce querying times less than 6ms using B-tree indexing and tuning</li>
                <li>Horizontally-scaled to five AWS t2.micro EC2 instances with NGINX load-balancer using least connections technique to increase throughput 3.4x under conditions of latency less than 70ms and an error rate of 0.0%</li>
              </ul>
            </div>
          </div>
          <div className="application">
            <div className="application-title">
              Memory Game: A game that allows players to use their short-term memory to match cards to their corresponding match
            </div>
            <div className="application-tech">
            HTML5 / CSS3 / jQuery
            </div>
            <div className="application-body">
              <MemoryGameCarousel />
              <ul className="undecorated feature-list">
                <li>Implemented a move counter, timer, a restart button, a star rating that decreases as a specific number of moves are reached, and a popup scoreboard that displays game statistics and congratulates the player for completing the game</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     )
   }
}