import ButtonUi from "@/ui/ButtonUi";
import React, {useEffect, useState} from "react";

interface Props {
    timeLeft?: number
    size?: "normal" | "small"
}

const CountdownTimerComponent = (props: Props) => {

    const [timeLeft, setTimeLeft] = useState(props.timeLeft || 86400);

    const formatTime = (seconds: number) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const sec = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${sec}`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    if (props.size === "small")
        return <ButtonUi size={"small"} width={80}>{formatTime(timeLeft)}</ButtonUi>
    else
        return <ButtonUi size={"normal"} width={150}>{formatTime(timeLeft)}</ButtonUi>
}

export default CountdownTimerComponent
