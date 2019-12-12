import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../applications/carousel.styles.scss';

const MemoryGameCarousel = () => (
  <div className="carousel-container">
    <CarouselProvider
      naturalSlideWidth={560}
      naturalSlideHeight={315}
      totalSlides={3}
    >
      <Slider className="portrait-aspect carousel">
        <Slide className="video-container" index={0}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4d3UfePRLIo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Memory Game Demo 3"></iframe>
        </Slide>
        <Slide className="video-container" index={1}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/xtMT100ui9M" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Memory Game Demo 2"></iframe>
        </Slide>
        <Slide className="video-container" index={2}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lKco4cbUewE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Memory Game Demo 3"></iframe>
        </Slide>
      </Slider>
      <ButtonBack className="prev arrow">&#60;</ButtonBack>
      <ButtonNext className="next arrow">&#62;</ButtonNext>
    </CarouselProvider>
  </div>
);

export default MemoryGameCarousel;