import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
background-color:#101522;
margin-top:300px;
height: 600px;
`;

export const FooterWrapp = styled.div`
padding:48px 24px;
display:flex;
z-index:1;
position:relative;
flex-direction:column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin:0 auto;
`;

export const FooterLinksContainer = styled.div`
display:flex;
justify-content: center;
@media screen and (max-width:820px){
    padding-top:32px;
};`;

export const FooterLinksWrapper = styled.div`
display:flex;
@media screen and (max-width:820px){
    flex-direction:column;
};
`;

export const FooterLinkItems = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
margin:16px;
text-align:left;
width:160px;
box-sizing:border-box;
color:#fff;
@media screen and (max-width: 420px){
    margin:0;
    padding:10px;
    width:100%;
};
`;

export const FooterLinkTitle = styled.h1`
font-size:14px;
margin-bottom:16px;
`;

export const FooterLink = styled(Link)`
color:#fff;
text-decoration:none;
margin-bottom:0.5rem;
font-size:14px;
&:hover{
    color:#01bf71;
    transition:0.3s ease-out-in 
}
`;

export const FooBgim = styled.div`
background:'black';
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`;

export const FooImageBg = styled.img`
border-radius: 25% 25% 25% 25%;
box-shadow: 0 0 20px 20px #141414;
margin: 10px 50px 20px 0;
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`;

export const SocialMedia = styled.section`
max-width:1000px;
width:100%;
`;

export const SocialMediaWrap = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
max-width:1100px;
margin:40px auto 0 auto;
@media screen and (max-width:820px){
    flex-direction:column;
}
`;

export const SocialLogo = styled(Link)`
color:#fff;
justify-self:start;
cursor:pointer;
text-decoration:none;
font-size:1.5rem;
align-items:center;
margin-bottoms:16px;
font-weightbold;
`;

export const WebSiteRights = styled.small`
color:#fff;
margin-bottom:16px;
`;

export const SocialIcons = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:240px;
`;

export const SocialIconLink = styled.a`
color:#fff;
font-size:24px;
`;

