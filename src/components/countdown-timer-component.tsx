import ButtonUi from "@/ui/button-ui";
import React, {useEffect, useState} from "react";

interface Props {
    timeLeft?: number
    endTime?: string
    size?: "normal" | "small"
}

const CountdownTimerComponent = (props: Props) => {
    let startTime = props?.timeLeft;
    // calculate seconds to endTime(string datetime)
    if (props.endTime !== undefined && props.endTime !== null) {
        const targetDate = new Date(props.endTime);
        const now = new Date();
        const differenceInMs = targetDate - now;
        const differenceInSeconds = Math.floor(differenceInMs / 1000);
        startTime = differenceInSeconds > 0 ? differenceInSeconds : 0;
    }

    const [timeLeft, setTimeLeft] = useState(startTime);

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
