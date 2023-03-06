import { useState } from 'react';
import { currencies } from "./currencies";
import { Result } from './Result';
import './style.css';

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
        <form className="form" onSubmit={onFormSubmit}>
            <h1 className="form__header">Kalkulator walutowy</h1>
            <div className="form__element">
                <p>
                    <label>
                        <span className="form__labelText">
                            Mam:
                        </span>
                        <select
                            className="form__field"
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
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Chcę otrzymać:
                        </span>
                        <select
                            className="form__field"
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
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota: </span>
                        <input
                            className="form__field"
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
            </div>
            <button className="form__button">Oblicz</button>
            <Result result={result} />
        </form>
    );
};

export default Form;