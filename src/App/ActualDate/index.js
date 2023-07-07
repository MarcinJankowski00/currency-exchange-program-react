import React from 'react';
import { useCurrentDate } from "./useCurrentDate";
import { Clock } from "./styled";

const formatDate = (date) => date.toLocaleDateString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long" 
    });

const ActualDate = () => {
    const date= useCurrentDate();
    
    return (
        <Clock>
            Dzisiaj jest {formatDate(date)}
        </Clock>
    )
}

export default ActualDate;