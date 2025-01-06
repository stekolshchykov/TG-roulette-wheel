import React, {useEffect, useState} from "react";

const GiftComponent = () => {
    const [timeLeft, setTimeLeft] = useState(24133); // Исходное время в секундах (06:41:33)

    // Функция для обновления времени каждую секунду
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Функция для перевода времени в формат HH:MM:SS
    const formatTime = (seconds: number) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const sec = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${sec}`;
    };

    return (
        // <div className={"h-[100px] flex bg-main-accent relative"}>
        <div className={" bg-main-accent relative"}>
            <div
                className="absolute right-4 top-[0px] w-[75px] h-[96px] flex flex-col justify-end items-center cursor-pointer z-[70]">
                <img
                    src="https://v2.wbruletka.games/assets/gift-CWLyQN-u.png"
                    alt="Gift"
                    className="absolute top-0 left-0 w-[75px] h-[75px] object-contain z-20 animate-pulse-slight"
                />
                <div
                    className=" backdrop-blur-[0px] border-t border-[#5A3754] rounded-[5px] h-[52px] flex flex-col items-center justify-end w-[56px]"
                >
                    <p className="text-[8px] font-bold leading-[110%] tracking-[-2%]">Подарок</p>
                    <div className="p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-[100.17px]">
                        <div
                            className="flex items-center justify-center bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] w-[50px] h-3 rounded-[234px]"
                        >
                            <p className="font-bold text-[9px] leading-[110%] tracking-[-2%]">
                                {formatTime(timeLeft)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftComponent;
