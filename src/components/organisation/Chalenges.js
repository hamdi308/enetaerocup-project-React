import React,{useEffect} from 'react';
import { SlideInLeft } from 'react-animated-components';
import { SocialIcons, SocialIconLink } from '../Footer/FooterElements';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiOutlineGlobal } from 'react-icons/ai'
import Aos from 'aos';
import { ChalengesContainer, ChalengesWrapper, ChalengesRaw, Colum1, TextWrapper, Heading, Subtitle, Colum2, ImgWrap, Img } from './ChalengesElemts'
import 'aos/dist/aos.css';
const Descriptions = ({lightBg, id,linkf,linki,linkw, imgStart, topline, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
 useEffect(() => {
        Aos.init({duration: 2000});
 }, [])
  return <>
          <SlideInLeft>
        <ChalengesContainer data-aos="fade-left" lightBg={lightBg} id="descript">
            <ChalengesWrapper >
                <ChalengesRaw imgStart={imgStart}>
                    <Colum1> 
                        <TextWrapper >
                            <Heading lightText={ lightText }>{ headLine}</Heading>
                            <Img src={img}></Img>
                        </TextWrapper>
                    </Colum1>
            <Colum2>
              <TextWrapper >
                            <Subtitle darkText={ darkText }>{ description }</Subtitle>
                        </TextWrapper>
                          <SocialIcons>
                              { linkf !== undefined ?
                              <SocialIconLink href={ linkf } target='_blank' aria-label='Facebook'>
                              <FaFacebook />
                              </SocialIconLink>: <></>}
                              { linki !== undefined ?
                          <SocialIconLink href={ linki } target='_blank' aria-label='Instagram'>
                                  <FaInstagram />
                              </SocialIconLink> : <></>}
                              { linkw !== undefined ?
                                  <SocialIconLink href={linkw} target='_blank' aria-label='Instagram'>
                                      <AiOutlineGlobal />
                                  </SocialIconLink> : <></>}
                      </SocialIcons>
                        <ImgWrap>
                        </ImgWrap>
                    </Colum2>
                </ChalengesRaw>
            </ChalengesWrapper>
      </ChalengesContainer>
          </SlideInLeft>

    </>;
};
export default Descriptions;
