import React from 'react'
import { useState, useEffect } from 'react';
import './timer.css'

interface timerProps {
    initialMinute: number;
    initialSeconds: number;
    counterFinishedText: string;
}

const Timer = ({initialMinute, initialSeconds, counterFinishedText}:timerProps) => {

    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div className='timerMainContainer'>
        { minutes === 0 && seconds === 0
            ? <p>{counterFinishedText}</p>
            : <p> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</p> 
        }
        </div>
    )
}

export default Timer;