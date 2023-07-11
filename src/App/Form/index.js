import { useState } from 'react';
import { Result } from './Result';
import { Header, Element, Text, Select, Field, Button } from "./styled";
import { useRatesData } from './useRatesData';

const Form = () => {
    const ratesData = useRatesData();
    const [inputCurrency, setInputCurrency] = useState("PLN");
    const [outputCurrency, setOutputCurrency] = useState("USD");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");

    const calculateResult = (inputCurrency, outputCurrency, amount) => {
        const inputRate = ratesData.rates[inputCurrency];
        const outputRate = ratesData.rates[outputCurrency];
        const outputAmount = amount * inputRate / outputRate;
        setResult({
            sourceAmount: +amount,
            targetAmount: outputAmount,
            rate: outputAmount / amount,
            inputCurrency,
            outputCurrency,
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(inputCurrency, outputCurrency, amount);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <Header>Kalkulator walutowy</Header>
            <Element>
                <p>
                    <label>
                        <Text>
                            Mam:
                        </Text>
                        <Select
                            value={inputCurrency}
                            onChange={({ target }) => setInputCurrency(target.value)}
                        >
                            {Object.keys(ratesData.rates).map((currency => (
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>
                            )))}
                        </Select>
                    </label>
                </p>
                <p>
                    <label>
                        <Text>
                            Chcę otrzymać:
                        </Text>
                        <Select
                            value={outputCurrency}
                            onChange={({ target }) => setOutputCurrency(target.value)}
                        >
                            {Object.keys(ratesData.rates).map((currency => (
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>
                            )))}
                        </Select>
                    </label>
                </p>
                <p>
                    <label>
                        <Text>
                            Kwota:
                        </Text>
                        <Field
                            type="number"
                            required
                            autoFocus={true}
                            placeholder="Wpisz kwotę"
                            value={amount}
                            min="0.01"
                            step="0.01"
                            onChange={(event) => setAmount(event.target.value)}
                        />
                    </label>
                </p>
            </Element>
            <Button>Oblicz</Button>
            <Result result={result} />
        </form>
    );
};

export default Form;