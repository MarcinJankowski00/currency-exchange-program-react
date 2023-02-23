import { useState } from 'react';
import './style.css';

const Form = () => {
    const [startingCurrency, setStartingCurrency] = useState("PLN");
    const [endingCurrency, setEndingCurrency] = useState("USD");
    const [amount, setAmount] = useState("1");
    const [result, setResult] = useState("0.23");
    const [exchange, setExchange] = useState("0.2274");
    const exchanges = {
        EUR: 4.6709,
        USD: 4.397,
        GBP: 5.2892,
        CHF: 4.7437,
        PLN: 1
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const endingAmount = amount * exchanges[startingCurrency] / exchanges[endingCurrency];
        setResult((endingAmount).toFixed(2));
        setExchange((endingAmount / amount).toFixed(4));
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
                            value={startingCurrency}
                            onChange={(event) => setStartingCurrency(event.target.value)}
                        >
                            <option value="PLN">PLN - Polska</option>
                            <option value="USD">USD - Stany Zjednoczone</option>
                            <option value="EUR">EUR - Unia Europejska</option>
                            <option value="GBP">GBP - Wielka Brytania</option>
                            <option value="CHF">CHF - Szwajcaria</option>
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
                            value={endingCurrency}
                            onChange={(event) => setEndingCurrency(event.target.value)}
                        >
                            <option value="PLN">PLN - Polska</option>
                            <option value="USD">USD - Stany Zjednoczone</option>
                            <option value="EUR">EUR - Unia Europejska</option>
                            <option value="GBP">GBP - Wielka Brytania</option>
                            <option value="CHF">CHF - Szwajcaria</option>
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
            <p>
                Kurs: 1 {startingCurrency} = {exchange}<br />
                Kwota w {endingCurrency}: {result}
            </p>
        </form>
    );
};

export default Form;