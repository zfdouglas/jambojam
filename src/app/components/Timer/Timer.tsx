"use client";
import { useEffect, useState } from "react";
import { DiscreteTimeBox } from "./DiscreteTimeBox";

export const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = process.env.DEADLINE;

    const getTimeUntilDeadline = () => {
        console.log(deadline)
        if (deadline){
            const time = Date.parse(deadline) - Date.now();
    
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }

      };

      useEffect(() => {
        if (deadline){
            const interval = setInterval(() => getTimeUntilDeadline(), 1000);
    
            return () => clearInterval(interval);
        }
      }, []);

    return(
        <div className={'w-full lg:3/5 xl:w-3/5 2xl:w-3/5 h-40 place-content-center text-center p-2 flex flex-wrap'}>
            <DiscreteTimeBox time={days} timeUnit={'DAYS'}/>
            <DiscreteTimeBox time={hours} timeUnit={'HOURS'}/>
            <DiscreteTimeBox time={minutes} timeUnit={'MINUTES'}/>
            <DiscreteTimeBox time={seconds} timeUnit={'SECONDS'}/>
        </div>
    )
}