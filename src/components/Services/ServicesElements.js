import styled from 'styled-components';

export const ServicesContainer = styled.div`
display:flex;
justify-content: center;
margin-top:250px;
position:relative;
z-index:1;
flex-direction:column;
align-items:center;
height: 802px;
@media screen and ( max-width:768px ){
    height:1100px;
};
@media screen and ( max-width:480px ){
    height:1300px;
};
`;

export const ServicesWrapper = styled.div`
max-width:1000px;
margin: 0 auto;
z-index:1;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 20px;
@media screen and ( max-width:1000px ){
     grid-template-columns: 1fr 1fr;
};
@media screen and ( max-width:768 ){
     grid-template-columns: 1fr;
     padding:0 20px;
};`;

export const ServicesCard = styled.div`
background:#fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height:340px;
padding:30px;
margin:20px;
box-shadow:0 1px 3px rgba(0,0,0,0,2);
transition: all 0.2s ease-in-out;

&:hover{
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
  cursor:pointer;
}
`;

export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom:64px;
`;

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color:#fff;
margin-bottom:64px;
@media screen and ( max-width: 480px ){
    font-size: 2rem;
};
`;

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom:10px;
`;

export const ServicesP = styled.p`
font-size:1rem;
text-align:center;
`;

export const InfoBgim = styled.div`
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

export const ImageBg = styled.img`
border-radius: 25% 25% 25% 25%;
box-shadow: 0 0 20px 20px #141414;
margin: 10px 50px 20px 0;
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;
`;



