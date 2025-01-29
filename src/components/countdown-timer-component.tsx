import {useRootStore} from "@/providers/RootStoreProvider";
import ButtonUi from "@/ui/button-ui";
import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";

interface Props {
    size?: "normal" | "small";
}

const CountdownTimerComponent = observer(({size = "normal"}: Props) => {
    const {rouletteStore} = useRootStore();
    const [timeLeft, setTimeLeft] = useState<number | null>(null);

    // useEffect(() => {
    //     if (rouletteStore?.free_spin_at) {
    //         const updateCountdown = () => {
    //             const now = Date.now();
    //             const remainingTime = Math.max(0, rouletteStore.free_spin_at - now);
    //             setTimeLeft(Math.floor(remainingTime / 1000));
    //         };
    //
    //         updateCountdown();
    //         const interval = setInterval(updateCountdown, 1000);
    //
    //         return () => clearInterval(interval);
    //     }
    //
    // }, [rouletteStore?.free_spin_at]);

    useEffect(() => {
        const updateCountdown = () => {
            const now = Date.now();
            const remainingTime = Math.max(0, rouletteStore.free_spin_at - now);

            // console.log("+++rouletteStore?.free_spin_at", rouletteStore?.free_spin_at)
            // console.log("+++Math.floor(remainingTime / 1000)", Math.floor(remainingTime / 1000))


            setTimeLeft(Math.floor(remainingTime / 1000));
        };


        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);

    }, []);

    const formatTime = (seconds: number) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const sec = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${sec}`;
    };

    const getFreeSpinHandler = () => {
        if (!timeLeft || timeLeft <= 0) {
            rouletteStore.getFreeSpin();
        }
    };

    return (
        <ButtonUi
            size={size}
            onClick={getFreeSpinHandler}
            width={size === "small" ? 80 : 150}>
            {timeLeft && timeLeft > 0 ? formatTime(timeLeft) : "Получить"}
        </ButtonUi>
    );
});

export default CountdownTimerComponent;
