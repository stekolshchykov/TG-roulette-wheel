import Image from "next/image";
import React, {useState} from "react";

interface Props {
    spin: number;
    onClick: () => void;
}

const RouletteComponent = (props: Props) => {

    const [rotationInner, setRotationInner] = useState(0);
    const [rotationMiddle, setRotationMiddle] = useState(0);
    const [rotationOuter, setRotationOuter] = useState(0);

    const spinRoulette = () => {
        if (props.spin > 0) {
            props.onClick();

            setRotationInner(535);

            setTimeout(() => {
                setRotationMiddle(435);
            }, 500);

            setTimeout(() => {
                setRotationOuter(385);
            }, 1000);
        }
    };

    return (
        <div className="flex-1 flex flex-col justify-end min-h-0 mb-8">
            <div className="w-full flex justify-center">
                <div
                    className="relative"
                    style={{width: 315, height: 315, margin: "0 auto", transform: "scale(0.9)"}}
                >
                    {/* Стрелки */}
                    <Image
                        src="/img/arrow-Ba6Z2jBJ.png"
                        alt="Arrow for middle circle"
                        width={24}
                        height={18}
                        className="absolute z-30"
                        style={{top: "7.5%", left: "50%", transform: "translateX(-50%)"}}
                    />
                    <Image
                        src="/img/arrow-Ba6Z2jBJ.png"
                        alt="Arrow for small circle"
                        width={24}
                        height={18}
                        className="absolute z-40"
                        style={{top: "21%", left: "50%", transform: "translateX(-50%)"}}
                    />
                    <Image
                        src="/img/arrow-Ba6Z2jBJ.png"
                        alt="Arrow for button"
                        width={24}
                        height={18}
                        className="absolute z-50"
                        style={{top: "34.6%", left: "50%", transform: "translateX(-50%)"}}
                    />

                    {/* Круги рулетки */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
                        style={{
                            width: 219,
                            height: 219,
                            transform: `translate(-50%, -50%) rotate(${rotationInner}deg)`,
                            transition: "transform 1s cubic-bezier(0.3, 0.1, 0.3, 0.9)",
                        }}
                    >
                        <Image src="/img/littlecircle-DOr2S01H.webp" alt="Inner circle" width={219} height={219}/>
                    </div>

                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                        style={{
                            width: 314,
                            height: 314,
                            transform: `translate(-50%, -50%) rotate(${rotationMiddle}deg)`,
                            transition: "transform 1s cubic-bezier(0.3, 0.1, 0.3, 0.9)",
                        }}
                    >
                        <Image src="/img/middlecircle-CjnyjbLd.webp" alt="Middle circle" width={314} height={314}/>
                    </div>

                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                        style={{
                            width: 315,
                            height: 315,
                            transform: `translate(-50%, -50%) rotate(${rotationOuter}deg)`,
                            transition: "transform 1s cubic-bezier(0.3, 0.1, 0.3, 0.9)",
                        }}
                    >
                        <Image src="/img/big-B3fyK_LS.webp" alt="Outer circle" width={315} height={315}/>
                    </div>

                    {/* Кнопка вращения */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer transition-all"
                        style={{width: 229, height: 229}}
                        onClick={spinRoulette}
                    >
                        <Image src="/img/button-BdOvv5f1.webp" alt="Center button" width={229} height={229}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RouletteComponent;
