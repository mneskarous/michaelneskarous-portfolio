import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../applications/carousel.styles.scss';

export default class AnthropologieCarousel extends Component {
    render() {
      return(
        <div className="carousel-container">
          <CarouselProvider
            naturalSlideWidth={150}
            naturalSlideHeight={107}
            totalSlides={2}
          >
            <Slider className="carousel">
              <Slide className="image-container" index={0}><img className="image" src='./images/anthropolgie/one-service-get.png' alt="Before horizontal scaling"/></Slide>
              <Slide className="image-container" index={1}><img className="image" src='./images/anthropolgie/five-services-get.png' alt="After horizontal scaling" /></Slide>
            </Slider>
            <ButtonBack><img className="prev-arrow" src='./images/prev.svg' alt="Previous Button" /></ButtonBack>
            <ButtonNext><img className="next-arrow" src='./images/next.svg' alt="Next Button" /></ButtonNext>
          </CarouselProvider>
        </div>
      )
    }
}