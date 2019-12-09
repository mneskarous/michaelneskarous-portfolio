import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './memory-game.styles.scss';

export default class MemoryGameCarousel extends Component {
    render() {
      return(
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}><img src='./images/memory-game/memory-game-demo-1.gif' alt="Memory Game demo 1"/></Slide>
            <Slide index={1}><img src='./images/memory-game/memory-game-demo-2.gif' alt="Memory Game demo 2" /></Slide>
            <Slide index={2}><img src='./images/memory-game/memory-game-demo-3.gif' alt="Memory Game demo 3" /></Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      )
    
    }
  
}