import React from 'react';
import { Wrapper } from './styled'

const Result = ({ result }) => (
    <Wrapper>
    {result !== undefined && (
        <>
        {result.sourceAmount.toFixed(2)}&nbsp;{result.fromCurrency}&nbsp;=&nbsp;
        {result.targetAmount.toFixed(2)}&nbsp;{result.toCurrency}&nbsp;
        </>
    )}
    </Wrapper>
)

export default Result;