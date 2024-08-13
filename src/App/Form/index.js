import { useState } from 'react';
import { Result } from './Result';
import { Header, Element, Text, Select, Field, Button, Mesage, LoaderWrapper } from "./styled";
import { useRatesData } from './useRatesData';
import { ClipLoader } from 'react-spinners';

const Form = () => {
    const { ratesData } = useRatesData();
    const [inputCurrency, setInputCurrency] = useState("PLN");
    const [outputCurrency, setOutputCurrency] = useState("USD");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");

    const calculateResult = (inputCurrency, outputCurrency, amount) => {
        const inputRate = ratesData.data.data[inputCurrency].value;
        const outputRate = ratesData.data.data[outputCurrency].value;
        const outputAmount = amount * outputRate / inputRate;
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
            {ratesData.status === "loading" ? (
                <>
                    <Mesage>
                        Pobieramy najnowsze dane z Narodowego Banku, proszę o chwilę cierpliwości
                    </Mesage>
                    <LoaderWrapper>
                        <ClipLoader size={75} color='alto' />
                    </LoaderWrapper>
                </>
            ) : ratesData.status === "error" ? (
                <Mesage>
                    Ups, coś poszło nie tak... <br />
                    Sprawdź połączenie z internetem, spróbuj odświeżyć stronę. Jeśli problem nadal występuje to wina leży po naszej stronie i aktualnie pracujemy nad rozwiązaniem.
                </Mesage>
            ) : (
                <>
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
                                    {Object.keys(ratesData.data.data).map((currency) => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </option>
                                    ))
                                    }
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
                                    {Object.keys(ratesData.data.data).map((currency) => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </option>
                                    ))}
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
                </>
            )}
        </form>
    );
};

export default Form;