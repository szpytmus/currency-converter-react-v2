import React, { useState } from 'react';
import { Timer } from './Timer'
import Form  from './Form'
import { currencies } from './Form/currencies'

function App() {

  const [result, setResult] = useState();
  const calculateResult = (fromCurrency, toCurrency, amount) => {
    
    const fromCurrencyRate = currencies.find (({ short }) => short === fromCurrency).rate;
    const toCurrencyRate = currencies.find (({ short }) => short === toCurrency).rate;

    setResult({
      sourceAmount: +amount,
      fromCurrency,
      targetAmount: (amount*fromCurrencyRate)/toCurrencyRate,
      toCurrency,
    });
  };

  return (
    <div>
      <Timer></Timer>
      <Form
      result = { result }
      calculateResult = { calculateResult }></Form>
    </div>
  );
}

export default App;
