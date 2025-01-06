import React, {useState} from "react";

const RouletteComponent = () => {
    const [rotationInner, setRotationInner] = useState(0);
    const [rotationMiddle, setRotationMiddle] = useState(0);
    const [rotationOuter, setRotationOuter] = useState(0);

    const spinRoulette = () => {
        const newRotation = 360 + Math.floor(Math.random() * 360); // случайный угол

        // Вращаем центральный круг
        setRotationInner((prev) => prev + newRotation);

        setTimeout(() => {
            // Вращаем средний круг
            setRotationMiddle((prev) => prev + newRotation);
        }, 500); // Задержка перед вращением среднего круга

        setTimeout(() => {
            // Вращаем внешний круг
            setRotationOuter((prev) => prev + newRotation);
        }, 1000); // Задержка перед вращением внешнего круга
    };

    return (
        <div className="flex-1 flex flex-col justify-end min-h-0 mb-8">
            <div className="w-full flex justify-center">
                <div
                    className="relative"
                    style={{width: 315, height: 315, margin: "0 auto", transform: "scale(0.9)"}}
                >
                    {/* Стрелки */}
                    <img
                        src="https://v2.wbruletka.games/assets/arrow-Ba6Z2jBJ.png"
                        alt="Arrow for middle circle"
                        className="absolute w-[23.74px] h-[18.47px] z-30"
                        style={{top: "7.5%", left: "50%", transform: "translateX(-50%)"}}
                    />
                    <img
                        src="https://v2.wbruletka.games/assets/arrow-Ba6Z2jBJ.png"
                        alt="Arrow for small circle"
                        className="absolute w-[23.74px] h-[18.47px] z-40"
                        style={{top: "21%", left: "50%", transform: "translateX(-50%)"}}
                    />
                    <img
                        src="https://v2.wbruletka.games/assets/arrow-Ba6Z2jBJ.png"
                        alt="Arrow for button"
                        className="absolute w-[23.74px] h-[18.47px] z-50"
                        style={{top: "34.6%", left: "50%", transform: "translateX(-50%)"}}
                    />

                    {/* Круги рулетки */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[219px] h-[219px] z-40"
                        style={{
                            transform: `translate(-50%, -50%) rotate(${rotationInner}deg)`,
                            transition: "transform 1s cubic-bezier(0.3, 0.1, 0.3, 0.9)"
                        }}
                    >
                        <img
                            src="https://v2.wbruletka.games/assets/littlecircle-DOr2S01H.webp"
                            alt="circle"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[314px] h-[314px] z-30"
                        style={{
                            transform: `translate(-50%, -50%) rotate(${rotationMiddle}deg)`,
                            transition: "transform 1s cubic-bezier(0.3, 0.1, 0.3, 0.9)"
                        }}
                    >
                        <img
                            src="https://v2.wbruletka.games/assets/middlecircle-CjnyjbLd.webp"
                            alt="circle"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[315px] h-[315px] z-20"
                        style={{
                            transform: `translate(-50%, -50%) rotate(${rotationOuter}deg)`,
                            transition: "transform 1s cubic-bezier(0.3, 0.1, 0.3, 0.9)"
                        }}
                    >
                        <img
                            src="https://v2.wbruletka.games/assets/big-B3fyK_LS.webp"
                            alt="circle"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Кнопка вращения */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[229px] h-[229px] z-50 cursor-pointer transition-all"
                        onClick={spinRoulette}
                    >
                        <img
                            src="https://v2.wbruletka.games/assets/button-BdOvv5f1.webp"
                            alt="Center button"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RouletteComponent;
