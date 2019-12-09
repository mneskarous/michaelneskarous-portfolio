import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../applications/carousel.styles.scss';

const FitnessTrackerCarousel = () => (
  <div className="carousel-container">
    <CarouselProvider
      naturalSlideWidth={28}
      naturalSlideHeight={48}
      totalSlides={3}
    >
      <Slider className="portrait-aspect carousel">
        <Slide className="image-container" index={0}>
          <img className="image" src='./images/fitness-tracker/MVP-Demo-1-part1.gif' alt="Fitness Tracker demo part 1"/>
        </Slide>
        <Slide className="image-container" index={1}>
          <img className="image" src='./images/fitness-tracker/MVP-Demo-1-part2.gif' alt="Fitness Tracker demo part 2" />
        </Slide>
        <Slide className="image-container"index={2}>
          <img className="image" src='./images/fitness-tracker/MVP-Demo-1-part3.gif' alt=" Fitness Tracker part 3" />
        </Slide>
      </Slider>
      <ButtonBack className="prev arrow">&#60;</ButtonBack>
      <ButtonNext className="next arrow">&#62;</ButtonNext>
    </CarouselProvider>
  </div>
);

export default FitnessTrackerCarousel;