import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactBreakPoints from 'react-breakpoints';
// import * as serviceWorker from './serviceWorker';

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 830,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}

ReactDOM.render(
  <ReactBreakPoints breakpoints={breakpoints}>
    <App />
  </ReactBreakPoints>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
