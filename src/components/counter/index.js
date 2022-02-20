import React from 'react';
import { CounterContainer, LiCounter, SpanCounter } from './CounterElements';

const Counter = ({days, hours, minutes, secondes}) => {
    return <>
        <CounterContainer>
            <LiCounter><SpanCounter >{ days -30 }</SpanCounter>days</LiCounter>
            <LiCounter><SpanCounter >{ hours }</SpanCounter>Hours</LiCounter>
        </CounterContainer>

    </>;
};

export default Counter;
