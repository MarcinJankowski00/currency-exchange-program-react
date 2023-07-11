import { useState } from 'react';
import { currencies } from "./currencies";
import { Result } from './Result';
import { Header, Element, Text, Select, Field, Button } from "./styled";

const Form = () => {
    const [inputCurrency, setInputCurrency] = useState("PLN");
    const [outputCurrency, setOutputCurrency] = useState("USD");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");

    const calculateResult = (inputCurrency, outputCurrency, amount) => {
        const inputRate = currencies.find(({ short }) => short === inputCurrency).rate;
        const outputRate = currencies.find(({ short }) => short === outputCurrency).rate;
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
                            onChange={(event) => setInputCurrency(event.target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
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
                            onChange={(event) => setOutputCurrency(event.target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
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