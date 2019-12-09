import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './lalalime-carousel.styles.scss';

export default class LalalimeCarousel extends Component {
    render() {
      return(
        <div className="carousel-container">
          <CarouselProvider
            naturalSlideWidth={80}
            naturalSlideHeight={50}
            totalSlides={3}
          >
            <Slider className="carousel">
              <Slide className="image-container" index={0}><img className="image" src='./images/lalalime/FEC-demo-filter.gif' alt="Lalalime filter demo"/></Slide>
              <Slide className="image-container" index={1}><img className="image" src='./images/lalalime/FEC-demo-popups.gif' alt="Lalalime popups demo" /></Slide>
              <Slide className="image-container"index={2}><img className="image" src='./images/lalalime/FEC-Demo-Sort.gif' alt=" Lalalime sort demo" /></Slide>
            </Slider>
            <ButtonBack><img className="prev-arrow" src='./images/prev.svg' alt="Previous Button" /></ButtonBack>
            <ButtonNext><img className="next-arrow" src='./images/next.svg' alt="Next Button" /></ButtonNext>
          </CarouselProvider>
        </div>
      )
    
    }
  
}