import React from 'react'
import { FooterContainer, FooterWrapp, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooBgim, FooImageBg, SocialMedia, SocialMediaWrap, SocialLogo, WebSiteRights, SocialIcons, SocialIconLink } from './FooterElements';
import image from '../images/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
      <FooterContainer>
        <FooBgim>
            <FooImageBg  src={image} type='image/jpg' />
        </FooBgim>
          <FooterWrapp>
              <FooterLinksContainer>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to='/ContactusPage'>About Us</FooterLink>
                              <FooterLink to='/ContactusPage'>How It Works</FooterLink>
                              <FooterLink to='/ContactusPage'>Testimonials</FooterLink>
                              <FooterLink to='/ContactusPage'>Careers</FooterLink>
                              <FooterLink to='/ContactusPage'>Investors</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                          <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to='/ContactusPage'>About Us</FooterLink>
                              <FooterLink to='/ContactusPage'>How It Works</FooterLink>
                              <FooterLink to='/ContactusPage'>Testimonials</FooterLink>
                              <FooterLink to='/ContactusPage'>Careers</FooterLink>
                              <FooterLink to='/ContactusPage'>Investors</FooterLink>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to='/ContactusPage'>About Us</FooterLink>
                              <FooterLink to='/ContactusPage'>How It Works</FooterLink>
                              <FooterLink to='/ContactusPage'>Testimonials</FooterLink>
                              <FooterLink to='/ContactusPage'>Careers</FooterLink>
                              <FooterLink to='/ContactusPage'>Investors</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                          <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to='/ContactusPage'>About Us</FooterLink>
                              <FooterLink to='/ContactusPage'>How It Works</FooterLink>
                              <FooterLink to='/ContactusPage'>Testimonials</FooterLink>
                              <FooterLink to='/ContactusPage'>Careers</FooterLink>
                              <FooterLink to='/ContactusPage'>Investors</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                          <FooterLinkTitle>social media</FooterLinkTitle>
                              <FooterLink to='/'>Facebook</FooterLink>
                              <FooterLink to='/'>Instagram</FooterLink>
                              <FooterLink to='/'>Linkedin</FooterLink>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
              </FooterLinksContainer>
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to='/'>AeroCup</SocialLogo>
                      <WebSiteRights>AeroCup © {new Date().getFullYear()} tous les droits réservés</WebSiteRights>
                      <SocialIcons>
                          <SocialIconLink href='https://www.facebook.com/ENETAeroCup' target='_blank' aria-label='Facebook'>
                              <FaFacebook />
                          </SocialIconLink>
                          <SocialIconLink href='https://instagram.com/aeromodelisme_enetcom?utm_medium=copy_link' target='_blank' aria-label='Instagram'>
                              <FaInstagram />
                          </SocialIconLink>
                          <SocialIconLink href='https://www.linkedin.com/company/aeromodelisme-enet-com' target='_blank' aria-label='Linkedin'>
                              <FaLinkedin />
                          </SocialIconLink>
                      </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrapp>
    </FooterContainer>
  )
}

export default Footer