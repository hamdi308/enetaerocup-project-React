import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';


export const HeroContainer = styled.div`
background:#0c0c0c;
margin-bottom:150px;
display:flex;
justify-content: center;
align-item:center;
padding-bottom:100px;
height: auto;
position:relative;
z-index:1;
margin: 0px 30px 150px 30px;
:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: linear-gradiant(
        180deg,
        rgba(0,0,0,0.2) 0%,
        transparent 100%);
        z-index:2;
}
@media screen and (max-width: 768px){
  margin-top:50px;
}
`;

export const HeroBg = styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
left:0;
width:auto;
height:auto;
overflow:hidden;
`;

export const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`;

export const HeroContent = styled.div`
z-index:3;
max-width: 1200px;
position:absolute: 
padding: 8px 50px;
margin-top:300px;
display:flex;
flex-direction: column;
align-items: center;
`;

export const HeroH1 = styled.h1`
color:#fff;
font-size: 48px;
text-align: center;
@media screen and (max-width: 768px){
    font-size: 40px;
}
@media screen and (max-width: 480px){
    font-size: 32px;
}
`;
export const HeroH2 = styled.h3`
color:#fff;
font-size: 38px;
text-align: center;
@media screen and (max-width: 768px){
    font-size: 30px;
}
@media screen and (max-width: 480px){
    font-size: 16px;
}
`;
export const HeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size:24px;
text-align: center;
max-width: 600px;
@media screen and (max-width: 768px){
    font-size: 24px
}
@media screen and (max-width: 480px){
    font-size: 18px;
}
`;

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display:flex;
flex-direction: column;
align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 30px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 30px;
`;











