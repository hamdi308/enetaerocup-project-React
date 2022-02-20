import React from 'react';
import { Button } from '../ButtonElement';
import image from '../images/background5.jpeg'
import { InfoContainer, InfoWrapper, InfoRaw, Colum1, TextWrapper, TopLine, BtnWrapp, Heading, Subtitle, Colum2, ImgWrap, Img, InfoBgim, ImageBg } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topline, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
    return <>
        <InfoContainer lightBg={lightBg} id="about">
            <InfoBgim>
            <ImageBg  src={image} type='image/jpg' />
        </InfoBgim>
            <InfoWrapper>
                <InfoRaw imgStart={imgStart}>
                    <Colum1>
                        <TextWrapper>
                            <TopLine>{topline}</TopLine>
                            <Heading lightText={ lightText }>{ headLine}</Heading>
                            <Subtitle darkText={ darkText }>{ description }</Subtitle>
                            <BtnWrapp>
                                <Button to='hame' smooth='{true}' duration='{500}' spy='{true}' exact='true' offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{ buttonLabel }</Button>
                            </BtnWrapp>
                        </TextWrapper>
                    </Colum1>
                    
                </InfoRaw>
            </InfoWrapper>
        </InfoContainer>
    </>;
};

export default InfoSection;
