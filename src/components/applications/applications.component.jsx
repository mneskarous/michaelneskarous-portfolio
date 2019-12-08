import React from 'react';

import './applications.styles.scss';

const Applications = () => (
  <div id="applications" className="applications">
    <div className="header-container">
      <h2>Applications</h2>
    </div>
    <div className="applications-container">
      <div className="application">
        <div>Fitness Tracker: A responsive, mobile-first web app that allows users to keep track of their fitness progress in various exercise categories</div>
      </div>
      <div className="application">
        <div>LalaLime Review Section: A functional front-end replica of the LuluLemon Review Section</div>
      </div>
      <div className="application">
      <div>Anthropologie Main Product Section: System design mock-up of the Anthropologie Main Product Section</div>
      </div>
      <div className="application">
      <div>Memory Game: A game that allows players to use their short-term memory to match cards to their corresponding match</div>
      </div>
    </div>
  </div>
);

export default Applications;