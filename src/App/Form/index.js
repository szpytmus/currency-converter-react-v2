import React, { useState } from 'react';
import { currencies } from './currencies';
import Result from './Result';

const Form = ({ calculateResult, result }) => {

    const [fromCurrency, setFromCurrency] = useState(currencies[0].short);
    const [toCurrency, setToCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(fromCurrency, toCurrency, amount);
    }


    return (
        <form onSubmit={onSubmit}>

            <legend>Currency Converter</legend>
            <p>
                <label>Calculate from:
                    <select
                        value={fromCurrency}
                        onChange={({ target }) => setFromCurrency(target.value)}
                        name="fromCurrency"
                    >
                        {currencies.map((currency) => (
                            <option key={currency.short} value={currency.short}>
                                {currency.short}
                            </option>
                        ))}
                    </select>
                </label>
            </p>
            <p>
                <label>Calculate to:
                    <select
                        value={toCurrency}
                        onChange={({ target }) => setToCurrency(target.value)}
                        name="toCurrency"
                    >
                        {currencies.map((currency) => (
                            <option key={currency.short} value={currency.short}>
                                {currency.short}
                            </option>
                        ))}
                    </select>
                </label>
            </p>
            <p>
                <label>Write amount:
                    <input
                        value={amount}
                        onChange = {({ target }) => setAmount(target.value)}
                        name = "value"
                        type = "number"
                        step = "0.01"
                        placeholder="Write amount here"
                        required
                    /> 
                </label>
            </p>
            <p>
                <button>Convert!</button>
            </p>
            <Result result={result}/>
        </form>


    )


}

export default Form;