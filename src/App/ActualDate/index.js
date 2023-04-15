import React, { useState, useEffect } from 'react';
import './style.css';

const ActualDate = () => {
    const [myDate, setMyDate] = useState(new Date());
    
    useEffect (() => {
        const intervalId = setInterval(() => {
            setMyDate(new Date());
        },1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <p className="date">
            Dzisiaj jest {myDate.toLocaleDateString(undefined, {weekday: "long", day: "numeric", month: "long"})}, {myDate.toLocaleTimeString()} 
        </p>
    )
}

export default ActualDate;