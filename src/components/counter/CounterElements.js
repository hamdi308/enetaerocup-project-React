import styled from 'styled-components';

export const CounterContainer = styled.div`
margin-bottom:100px;
@media all and (max-width: 768px) {
  LiCounter {
    font-size: calc(1.125rem * var(--smaller));
  }
}
`;

export const LiCounter = styled.li`
color:white;
display: inline-block;
font-size: calc(1.125rem * var(--smaller));
list-style-type: none;
padding: 1em;
text-transform: uppercase;
`;

export const SpanCounter = styled.span`
color:white;
display: block;
font-size: 4.5rem;
`;


