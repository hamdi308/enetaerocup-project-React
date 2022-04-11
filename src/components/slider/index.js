import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import imgback from '../images/giphy.gif';
import image1 from '../images/png1.png';
import image2 from '../images/png2.png';
import image3 from '../images/png3.png';
import image4 from '../images/mtclogo-removebg-preview.png'
import image5 from '../images/png4.png'

import { SlideContainer,SlideBgim,SlideBg } from './SliderElements';

function Slider() {
  return <>
    <SlideContainer id="sponsors">
      <SlideBgim>
            <SlideBg  src={imgback} type='image/png' />
        </SlideBgim>
      <Carousel >
        <Carousel.Item interval={1000}>
          <img
            style={{ width:'500px',height:'500px', align: 'center'}}
            className="d-block w-100"
            src={image1}
            alt="First slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
         <Carousel.Item interval={500}>
          <img
            style={{ width:'500px',height:'500px', align: 'center'}}
            className="d-block w-100"
            src={image4}
            alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            style={{ width:'500px',height:'500px', align: 'center'}}
            className="d-block w-100"
            src={image2}
            alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width:'500px',height:'500px',align: 'center'}}
            className="d-block w-100"
            src={image3}
            alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width:'500px',height:'500px',align: 'center'}}
            className="d-block w-100"
            src={image5}
            alt="Third slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </SlideContainer>
  </>;
}

export default Slider;