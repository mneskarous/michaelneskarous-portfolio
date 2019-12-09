import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../applications/carousel.styles.scss';

const LalalimeCarousel = () => (
  <div className="carousel-container">
    <CarouselProvider
      naturalSlideWidth={80}
      naturalSlideHeight={51}
      totalSlides={3}
    >
      <Slider className="carousel">
        <Slide className="image-container" index={0}>
          <img className="image" src='./images/lalalime/FEC-demo-filter.gif' alt="Lalalime filter demo"/>
        </Slide>
        <Slide className="image-container" index={1}>
          <img className="image" src='./images/lalalime/FEC-demo-popups.gif' alt="Lalalime popups demo" />
        </Slide>
        <Slide className="image-container"index={2}>
          <img className="image" src='./images/lalalime/FEC-Demo-Sort.gif' alt=" Lalalime sort demo" />
        </Slide>
      </Slider>
      <ButtonBack className="prev-arrow">&#60;</ButtonBack>
      <ButtonNext className="next-arrow">&#62;</ButtonNext>
    </CarouselProvider>
  </div>
);

export default LalalimeCarousel;