import React from 'react'
import { FooterContainer, FooterWrapp,FooterTopsection,FooterContactItems,FooterTopWrapp,Powred,FooterDescription, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebSiteRights, SocialIcons, SocialIconLink, FooLogo, FooterMtcItems } from './FooterElements';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import mtclogo from '../images/mtclogo.jpg';
import aerologo from '../images/logo2-removebg-preview.png';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


const Footer = () => {
  return (
      <FooterContainer>
          <FooterTopWrapp>
              <FooterTopsection>
                      <FooterMtcItems>
                      <Powred>powered by</Powred>
                      <FooLogo src={mtclogo} />
                      </FooterMtcItems>
                                          
                      <FooterDescription>
                      <FooLogo style={{ margin:'auto', width: '150px', height:'150px'}} src={aerologo} />
                     La compétition nationale ENET AERO CUP 1.0.
Cet événement est considéré comme le premier dans le sud de la Tunisie et bien précisément dans la région de Sfax.
                  </FooterDescription>
                  <FooterContactItems>
                      <FooterLinkTitle>
                          <FooterLink ><FaPhoneAlt />  +216 54270950 Ghazi Abdallah - President</FooterLink>
                          <FooterLink ><FaPhoneAlt />  +216 28038671 Med amine Abdssatar - Vice President</FooterLink>
                          <FooterLink ><FaPhoneAlt/>  +216 24202136 Mahran Kammoun - Trésorier</FooterLink>
                              <FooterLink ><FaEnvelopeOpenText/>  enet.aero.cup@gmail.com</FooterLink>
                              <FooterLink ><FaMapMarkerAlt/>  Route de Tunis km 10, Cité el Ons, Technopôle de Sfax،, Sakiet Ezzit</FooterLink>
                              </FooterLinkTitle>
                  </FooterContactItems>
              </FooterTopsection>
              </FooterTopWrapp>
                    <FooterWrapp>
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to='/'>Enet Aero Cup</SocialLogo>
                      <WebSiteRights>MTC EnetCom©{new Date().getFullYear()} tous droits réservés</WebSiteRights>
                      <SocialIcons>
                          <SocialIconLink href='https://www.facebook.com/ENETAeroCup' target='_blank' aria-label='Facebook'>
                              <FaFacebook />
                          </SocialIconLink>
                          <SocialIconLink href='https://www.instagram.com/enet.aerocup/' target='_blank' aria-label='Instagram'>
                              <FaInstagram />
                          </SocialIconLink>
                      </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrapp>
    </FooterContainer>
  )
}

export default Footer