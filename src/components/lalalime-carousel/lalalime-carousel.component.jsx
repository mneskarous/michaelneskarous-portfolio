import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './lalalime-carousel.styles.scss';

export default class LalalimeCarousel extends Component {
    render() {
      return(
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}><img src='./images/lalalime/FEC-demo-filter.gif' alt="Lalalime filter demo"/></Slide>
            <Slide index={1}><img src='./images/lalalime/FEC-demo-popups.gif' alt="Lalalime popups demo" /></Slide>
            <Slide index={2}><img src='./images/lalalime/FEC-Demo-Sort.gif' alt=" Lalalime sort demo" /></Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      )
    
    }
  
}