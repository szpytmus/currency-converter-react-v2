import React, { useState } from 'react';
import Result from '../Result';
import { Loading, Failure } from './styled';
import { useRatesData } from './useRatesData';

const Form = () => {

    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (fromCurrency, toCurrency, amount) => {

        const fromCurrencyRate = ratesData.rates[fromCurrency];
        const toCurrencyRate = ratesData.rates[toCurrency];

        setResult({
            sourceAmount: +amount,
            fromCurrency,
            targetAmount: (amount * fromCurrencyRate) / toCurrencyRate,
            toCurrency,
        });
    };


    const [fromCurrency, setFromCurrency] = useState("PLN");
    const [toCurrency, setToCurrency] = useState("PLN");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult( fromCurrency, toCurrency, amount);
    }

  

    return (
        
        <form onSubmit={onSubmit}>

            <header>Currency Converter</header>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Please wait... <br /> Currency rates are loading from European Central Bank. :)
                    </Loading>
                )
                :(
                    ratesData.state === "error" ? (
                        <Failure>
                            Hmm... Unfortunately something went wrong. Please check your internet connection.
                        </Failure>
                    ) : (
                        <>
                            <p>
                                <label>Calculate from:
                                <select
                                        value={fromCurrency}
                                        onChange={({ target }) => setFromCurrency(target.value)}
                                        name="fromCurrency"
                                >
                                        {!!ratesData.rates && Object.keys(ratesData.rates).map(((currency) => (
                                            <option key={currency} value={currency}>
                                                {currency}
                                            </option>
                                        )))}
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
                                       {!!ratesData.rates && Object.keys(ratesData.rates).map(((currency) => (
                                            <option key={currency} value={currency}>
                                                {currency}
                                            </option>
                                        )))}
                                </select>
                                </label>
                            </p>
                            <p>
                            <label>Write amount:
                            <input
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        name="value"
                                        type="number"
                                        step="0.01"
                                        placeholder="Write amount here"
                                        required
                            />
                            </label>
                            </p>
                            <p>
                                <button>Convert!</button>
                            </p>
                            <Result result={result} />
                        </>   
                        )
                )}
                
        </form>

    );
};

export default Form;