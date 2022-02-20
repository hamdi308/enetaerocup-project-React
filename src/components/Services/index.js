import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, InfoBgim, ImageBg } from './ServicesElements';
import Icon1 from '../images/svg-1.svg'
import Icon2 from '../images/svg-2.svg'
import Icon3 from '../images/svg-3.svg'
import image from '../images/backgroundinfo.jpg'


const Services = () => {
    return <ServicesContainer id="sevices">
        <InfoBgim>
            <ImageBg  src={image} type='image/jpg' />
        </InfoBgim>
        <ServicesH1>Our Event</ServicesH1>  
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Exercitation sint</ServicesH2>
                <ServicesP>Labore reprehenderit voluptate anim elit anim officia sunt eu nulla nulla irure commodo deserunt.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>elit anim </ServicesH2>
                <ServicesP>Labore reprehenderit voluptate anim elit anim officia sunt eu nulla nulla irure commodo deserunt.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>commodo deserunt</ServicesH2>
                <ServicesP>Labore reprehenderit voluptate anim elit anim officia sunt eu nulla nulla irure commodo deserunt.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>;
};

export default Services;
