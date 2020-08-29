import React from 'react';
import { useCurrentDate } from './useCurrentDate'
import { Wrapper } from './styled'

const formatDate = (date) => date.toLocaleString("en-GB", {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
});

export const Timer = () => {
    
    const date = useCurrentDate();

    return(
        <Wrapper> Today is: {""}{formatDate(date)}</Wrapper>
    );
};