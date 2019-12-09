import React from 'react';
import { Media } from 'react-breakpoints';
import DesktopNavigation from '../desktop-navigation/desktop-navigation.component';
import MobileNavigation from '../mobile-navigation/mobile-navigation.component';

const Navbar = () => (
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

export default Navbar;