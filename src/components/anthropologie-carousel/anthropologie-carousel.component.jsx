import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class AnthropologieCarousel extends Component {
    render() {
      return(
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={2}
        >
          <Slider>
            <Slide index={0}><img src='./images/anthropolgie/one-service-get.png' alt=""/></Slide>
            <Slide index={1}><img src='./images/anthropolgie/five-services-get.png' alt="" /></Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      )
    
    }
  
}