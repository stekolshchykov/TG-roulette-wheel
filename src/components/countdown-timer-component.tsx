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
        return <div className="p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-[100.17px]">
            <div
                className="flex items-center justify-center bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] w-[60px] h-3 rounded-[234px]"
            >
                <p className="font-bold text-[9px] leading-[110%] tracking-[-2%]">
                    {formatTime(timeLeft)}
                </p>
            </div>
        </div>
    else
        return <div className="p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-[100.17px]">
            <div
                className="flex items-center justify-center bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] w-[80px] h-[20px] rounded-[234px]"
            >
                <p className="font-bold text-[13px] leading-[110%] tracking-[-2%]">
                    {formatTime(timeLeft)}
                </p>
            </div>
        </div>
}

export default CountdownTimerComponent
