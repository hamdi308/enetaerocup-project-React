import styled from 'styled-components'
import { Link as linkR } from 'react-router-dom'
import { Link as linkS } from 'react-scroll'

export const Nav = styled.nav`
background: ${({ scrollNav}) => (scrollNav ? '#000' : 'transparent')};
height: 100px;
margin-top: -80px;
display: flex;
justify-content: flex;
align-items: center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;
@media screen and (max-width:960px){
    transition:0.8s all ease;
}
`;
export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px;`;
export const NavLogo = styled(linkR)`
color:#F7F7F7;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;
`;
export const MobileIcon = styled.div`
display:none;
@media screen and (max-width: 768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor:pointer;
    color:#fff;
}`;
export const NavMenu = styled.ul`
display: flex;
aligne-items:center;
list-style:none;
text-align:center;
margin-right:-24px; 
@media screen and (max-width: 768px){
    display:none;
}`;
export const NavItems = styled.li`
height:40px;
padding-left: 60px;
transition:0.2s ease-in-out;
&:hover{
   color:#D99644;
   transition:0.2s ease-in-out;}
`;
export const NavLinks = styled(linkS)`
color:white;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
margin-top:18px;
height:100%;
cursor:pointer;
&.active{
    border-bottom:3px solid #D99644;
}
&:hover{
   color:#D99644;
   transition:0.2s ease-in-out;}
`; 
export const NavBtn = styled.nav`
align-items: center;
    position:fixed;
    top:22px;
    right:300px;
@media screen and (max-width:768px){
    display:none;
}`
export const NavBtnLink = styled(linkR)`
border-radius:50px;
background:linear-gradient(90deg, #e65c00 25%, #F9D423 55% );
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;
&:hover {
    transition:all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}
`;
export const Logo = styled.img`
 display: inline-block;
  height: 100%;
  padding-left: 5px;
  width: 150px;
  height: 100px;
  border-radius:25%;
`
