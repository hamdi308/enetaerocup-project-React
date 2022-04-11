import React, { useEffect,useState } from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, InfoBgim, ImageBg } from './ServicesElements';
import image from '../images/background30.png';
import cmp1 from '../images/Planeur-icon.gif';
import cmp2 from '../images/Polyclub-icon.gif';
import cmp3 from '../images/Drone2 (2).gif';


import Aos from 'aos';
import 'aos/dist/aos.css';
import Descriptions from './Chalenges';
import {homeObjOne,homeObjTwo,homeObjThree} from './Data';

const Services = () => {
    const [homeobj, setHomeobj] = useState();
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return <ServicesContainer  id="sevices">
        <InfoBgim>
            <ImageBg  src={image} type='image/jpg' />
        </InfoBgim>
        <ServicesH1>--Competitions--</ServicesH1>  
        <ServicesWrapper>
            <ServicesCard to='descript' onClick={()=> {
                setHomeobj(homeObjOne);
            
                    }}>
                <ServicesIcon  src={cmp1} />
                <ServicesH2>PLANEUR</ServicesH2>
            </ServicesCard>
            <ServicesCard onClick={() => {
                setHomeobj(homeObjTwo);
                    }}>
                <ServicesIcon src={cmp2} />
                <ServicesH2>POLYCLUB</ServicesH2>
            </ServicesCard>
            <ServicesCard onClick={()=> {
                setHomeobj(homeObjThree);
                    }}>
                <ServicesIcon src={cmp3} />
                <ServicesH2>DRONE</ServicesH2>
            </ServicesCard>
        </ServicesWrapper>
        {  homeobj !== undefined ? <Descriptions {...homeobj} /> :
            <div></div>
            }
    </ServicesContainer>;
};

export default Services;
