import React from 'react';

export const Result = ({ result }) => (
    <p>
        {!!result && (
            <>
            Kurs:&nbsp;1{result.inputCurrency}&nbsp;={result.rate.toFixed(4)}&nbsp;{result.outputCurrency}<br />
            Kwota&nbsp;w&nbsp;{result.outputCurrency}:&nbsp;{result.targetAmount.toFixed(2)}
            </>
        )}
    </p>
)