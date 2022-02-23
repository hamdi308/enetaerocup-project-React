import styled from 'styled-components';

export const PopContainer = styled.div`
display:flex;
background-color:black;
justify-content: center;
align-item:center;
padding:0;
position:sticky;
height: 750px;
width:750px;
margin-top:50px;
position:relative;
z-index:10;
:before {
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    background: linear-gradiant(
        180deg,
        rgba(0,0,0,0.2) 0%,
        transparent 100%);
        z-index:2;
}`;


