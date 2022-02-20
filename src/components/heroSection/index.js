import React, {useState} from 'react';
import video from '../videos/video.mp4'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Counter from '../counter';
import { counting } from '../counter/compteur.js';


const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <Counter {...counting()} />
            <HeroH1>Stay Tunned for Enetcom aeroDay</HeroH1>
            <HeroP></HeroP>
            <HeroBtnWrapper>
            </HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'> Get started { hover ? <ArrowForward /> : <ArrowRight />}</Button>
        </HeroContent>
  </HeroContainer>;
};

export default HeroSection;
