import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../applications/carousel.styles.scss';

const LalalimeCarousel = () => (
  <div className="carousel-container">
    <CarouselProvider
      naturalSlideWidth={560}
      naturalSlideHeight={315}
      totalSlides={3}
    >
      <Slider className="carousel">
        <Slide className="video-container" index={0}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yhEQG5etWNo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Lalalime Filter Demo"></iframe>
        </Slide>
        <Slide className="video-container" index={1}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/j8S6xaIPl3M" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Lalalime Sort Demo"></iframe>
        </Slide>
        <Slide className="video-container"index={2}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Oz7oDnI-UXw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Lalalime Popups Demo"></iframe>
        </Slide>
      </Slider>
      <ButtonBack className="prev arrow">&#60;</ButtonBack>
      <ButtonNext className="next arrow">&#62;</ButtonNext>
    </CarouselProvider>
  </div>
);

export default LalalimeCarousel;