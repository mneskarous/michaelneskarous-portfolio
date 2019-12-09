import React, { Component } from 'react';
import { Media } from 'react-breakpoints';
import DesktopNavigation from '../desktop-navigation/desktop-navigation.component';
import MobileNavigation from '../mobile-navigation/mobile-navigation.component';

export default class Navbar extends Component{
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] > breakpoints.mobileLandscape ? (
            <DesktopNavigation />
          ) : (
            <MobileNavigation />
          )
        }
      </Media>
    );
  }
}