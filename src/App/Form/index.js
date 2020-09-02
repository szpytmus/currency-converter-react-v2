import React, { useState } from 'react';
import Result from '../Result';
import { StyledForm, Select, Button, Label, Input, Loading, Failure } from './styled';
import { useRatesData } from './useRatesData';
import { Timer } from '../Timer';

const Form = () => {

    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (fromCurrency, toCurrency, amount) => {

        const fromCurrencyRate = ratesData.rates[fromCurrency];
        const toCurrencyRate = ratesData.rates[toCurrency];

        setResult({
            sourceAmount: +amount,
            fromCurrency,
            targetAmount: (amount * toCurrencyRate) / fromCurrencyRate ,
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
        
        <StyledForm onSubmit={onSubmit}>

            
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
                                <Timer></Timer>
                                <Label>Calculate from:
                                <Select
                                        value={fromCurrency}
                                        onChange={({ target }) => setFromCurrency(target.value)}
                                        name="fromCurrency"
                                >
                                        {!!ratesData.rates && Object.keys(ratesData.rates).map(((currency) => (
                                            <option key={currency} value={currency}>
                                                {currency}
                                            </option>
                                        )))}
                                </Select>
                                </Label>
                            </p>
                            <p>
                                <Label>Calculate to:
                                <Select
                                        value={toCurrency}
                                        onChange={({ target }) => setToCurrency(target.value)}
                                        name="toCurrency"
                                >
                                       {!!ratesData.rates && Object.keys(ratesData.rates).map(((currency) => (
                                            <option key={currency} value={currency}>
                                                {currency}
                                            </option>
                                        )))}
                                </Select>
                                </Label>
                            </p>
                            <p>
                            <Label>Write amount:
                            <Input
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        name="value"
                                        type="number"
                                        step="0.01"
                                        placeholder="Write amount here"
                                        required
                            />
                            </Label>
                            </p>
                            <p>
                                <Button>Convert!</Button>
                            </p>
                            <Result result={result} />
                        </>   
                        )
                )}
                
        </StyledForm>

    );
};

export default Form;