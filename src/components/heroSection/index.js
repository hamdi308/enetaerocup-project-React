import React, {useState, useEffect} from 'react';
import video from '../videos/video.mp4'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Counter from '../counter';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <Counter   />
            <HeroH1 data-aos="fade-up" >Restez Branché ...</HeroH1>
            <HeroP></HeroP>
            <HeroBtnWrapper>
            </HeroBtnWrapper>
                <Button  to='sevices' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'> Démarrer { hover ? <ArrowForward /> : <ArrowRight />}</Button>
        </HeroContent>
  </HeroContainer>;
};

export default HeroSection;
