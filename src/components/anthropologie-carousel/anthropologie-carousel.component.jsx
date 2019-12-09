import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../applications/carousel.styles.scss';

const AnthropologieCarousel = () => (
  <div className="carousel-container">
    <CarouselProvider
      naturalSlideWidth={150}
      naturalSlideHeight={107}
      totalSlides={2}
    >
      <Slider className="carousel">
        <Slide className="image-container" index={0}>
          <img className="image" src='./images/anthropolgie/one-service-get.png' alt="Before horizontal scaling"/>
        </Slide>
        <Slide className="image-container" index={1}>
          <img className="image" src='./images/anthropolgie/five-services-get.png' alt="After horizontal scaling" />
        </Slide>
      </Slider>
      <ButtonBack className="prev-arrow">&#60;</ButtonBack>
      <ButtonNext className="next-arrow">&#62;</ButtonNext>
    </CarouselProvider>
  </div>
);

export default AnthropologieCarousel;