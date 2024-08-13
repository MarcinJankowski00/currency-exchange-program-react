import { useEffect, useState } from "react";

const requestURL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_IcQgY3NQyTOkRdScdTGCR5JDm2098ZvuSN0txDyc";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
        data: null,
    });

    useEffect(() => {

        const fetchRates = async () => {
            try {
                const response = await fetch(requestURL);
                
                if (!response.ok) {
                   throw new Error(response.statusText);
                }
                const  data  = await response.json();

                setRatesData({
                    status: "success",
                    data,
                });
            }   catch (error) {
                setRatesData({
                    status: "error",
                    data: null,
                });
            };
        };
        setTimeout(fetchRates,1000);
    }, []);
    return { ratesData };    
};