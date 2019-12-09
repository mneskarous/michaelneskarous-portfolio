import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../applications/carousel.styles.scss';

export default class MemoryGameCarousel extends Component {
    render() {
      return(
        <div className="carousel-container">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={109}
            totalSlides={3}
          >
            <Slider className="carousel">
              <Slide className="image-container" index={0}><img className="image" src='./images/memory-game/memory-game-demo-1.gif' alt="Memory Game demo 1"/></Slide>
              <Slide className="image-container" index={1}><img className="image" src='./images/memory-game/memory-game-demo-2.gif' alt="Memory Game demo 2" /></Slide>
              <Slide className="image-container" index={2}><img className="image" src='./images/memory-game/memory-game-demo-3.gif' alt="Memory Game demo 3" /></Slide>
            </Slider>
            <ButtonBack><img className="prev-arrow" src='./images/prev.svg' alt="Previous Button" /></ButtonBack>
            <ButtonNext><img className="next-arrow" src='./images/next.svg' alt="Next Button" /></ButtonNext>
          </CarouselProvider>
        </div>
      )
    
    }
  
}