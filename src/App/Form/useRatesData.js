import { useEffect, useState } from "react";

const requestURL = "https://api.exchangerate.host/latest?base=PLN";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {

        const fetchRates = async () => {
            try {
                const response = await fetch(requestURL);
                
                if (!response.ok) {
                   throw new Error(response.statusText);
                }
                const { rates, date } = await response.json();

                setRatesData({
                    status: "success",
                    rates,
                    date,
                });
            }   catch {
                setRatesData({
                    status: "error",
                });
            };
        };

        setTimeout(fetchRates, 1000);
    }, []);
   
    return ratesData;    
};