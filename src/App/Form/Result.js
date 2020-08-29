import React from 'react';

const Result = ({ result }) => (
    <div>
    {result !== undefined && (
        <>
        {result.sourceAmount.toFixed(2)}&nbsp;{result.fromCurrency}&nbsp;={""}
        {result.targetAmount.toFixed(2)}&nbsp;{result.toCurrency}&nbsp;
        </>
    )}
    </div>
)

export default Result;