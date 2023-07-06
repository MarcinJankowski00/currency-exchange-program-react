import React, { useState, useEffect } from 'react';
import { Clock } from "./styled";

const ActualDate = () => {
    const [myDate, setMyDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMyDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Clock>
            Dzisiaj jest {myDate.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })}, {myDate.toLocaleTimeString()}
        </Clock>
    )
}

export default ActualDate;