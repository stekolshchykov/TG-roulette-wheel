import ButtonUi from "@/ui/button-ui";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@/providers/RootStoreProvider";

interface Props {
    timeLeft?: number
    size?: "normal" | "small"
}

const CountdownTimerComponent = observer((props: Props) => {

    const { rouletteStore } = useRootStore()



    const isTime = rouletteStore.timeLeft > 0

    const formatTime = (seconds: number) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const sec = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${sec}`;
    };

    const getFreeSpinHandler = () => {
        if (!isTime) {
            rouletteStore.getFreeSpin()
        }
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // setTimeLeft(.prevTime => prevTime - 1);
    //         rouletteStore.timeLeft =-1
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    if (props.size === "small")
        return <ButtonUi
            size={"small"}
            onClick={getFreeSpinHandler}
            width={80}>
            {isTime ? formatTime(rouletteStore.timeLeft) : "Получить"}
        </ButtonUi>
    else
        return <ButtonUi
            size={"normal"}
            onClick={getFreeSpinHandler}
            width={150}>
            {isTime ? formatTime(rouletteStore.timeLeft) : "Получить"}
        </ButtonUi>
})

export default CountdownTimerComponent
