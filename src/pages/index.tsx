import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";

const Index: React.FC = () => {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const [wheelPosition, setWheelPosition] = useState(-410);

    useEffect(() => {
        if (progress >= 100 && router.pathname !== "/roulette") {
            console.log("Redirecting to /roulette...");
            router.replace("/roulette");
        }
    }, [progress, router]); // Теперь `useEffect` срабатывает только при изменении `progress`

    useEffect(() => {
        let progressInterval: NodeJS.Timeout;
        let pauseTimeout: NodeJS.Timeout;
        let isPaused = false;

        const updateProgress = () => {
            progressInterval = setInterval(() => {
                if (!isPaused) {
                    setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
                }
            }, 50);
        };

        const pauseProgress = () => {
            isPaused = true;
            clearTimeout(pauseTimeout);
            pauseTimeout = setTimeout(() => {
                isPaused = false;
            }, Math.random() * 1000 + 500);
        };

        updateProgress();
        const pauseInterval = setInterval(pauseProgress, Math.random() * 2000 + 1000);

        return () => {
            clearInterval(progressInterval);
            clearInterval(pauseInterval);
            clearTimeout(pauseTimeout);
        };
    }, []); // Теперь `useEffect` запускается только один раз при монтировании

    useEffect(() => {
        const wheelInterval = setInterval(() => {
            setWheelPosition((prev) => {
                if (prev >= 0) {
                    clearInterval(wheelInterval);
                    return 0;
                }
                return prev + 1;
            });
        }, 5);

        return () => clearInterval(wheelInterval);
    }, []);

    return (
        <div className="border-t border-[#6C3661] absolute z-[100]">
            <div className="fixed inset-0 z-40 bg-[#151515] flex flex-col items-center overflow-hidden opacity-100">
                <div className="w-full h-full relative">
                    <img
                        src="/img/wheel4tc-DsABp7OR.webp"
                        alt="Wheel"
                        className="absolute bottom-[-15%] left-[18%] w-[65vw] z-10 scale-[3] opacity-100"
                        style={{rotate: `${wheelPosition}deg`}}
                    />
                    <img
                        src="/img/mainglowc-a7fIHNBM.webp"
                        alt="Main Glow"
                        className="absolute bottom-[10%] z-10 opacity-40 scale-[2.98537]"
                    />
                    <img
                        src="/img/bottomglowc-Din2H2OH.webp"
                        alt="Bottom Glow"
                        className="absolute bottom-[-22%] z-20 opacity-10 scale-[1.5] -translate-x-[2%]"
                    />
                    <img
                        src="/img/sidesglow-B105IUKD.webp"
                        alt="Side Glow"
                        className="absolute bottom-[-5%] z-20 opacity-100 scale-[1.5] -translate-x-[2%]"
                    />
                    <img
                        src="/img/whiteround-9jIWZWmY.webp"
                        alt="White Round Glow"
                        className="absolute bottom-[-15%] z-30 opacity-100 scale-[1.5]"
                    />
                    <img
                        src="/img/barrightc-_w0QRczF.webp"
                        alt="Right Bar"
                        className="absolute bottom-[10%] z-30 opacity-100"
                    />
                    <img
                        src="/img/barleftc-D-sldF9Z.webp"
                        alt="Left Bar"
                        className="absolute bottom-[10%] z-30 opacity-100"
                    />
                    <img
                        src="/img/barmiddlec-BsZwhlmY.webp"
                        alt="Middle Bar"
                        className="absolute bottom-[10%] z-30 opacity-100"
                    />

                    <div className="w-full h-full flex flex-col items-center relative z-10">
                        <div className="mt-[3vh]">
                            <div className="flex translate-x-3 opacity-100">
                                <img
                                    src="/img/LoadingLogo-BDDCejQd.webp"
                                    alt="Logo"
                                    className="w-full h-full scale-[1.5] -translate-x-[3%]"
                                />
                            </div>
                        </div>

                        <div className="w-[80vw] mt-20 relative z-10">
                            <div className="absolute inset-0 bg-[#151517] rounded-[29px] opacity-40 z-0"></div>
                            <div className="relative w-full h-[27px] bg-gray-200 rounded-[29px] overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-b from-[#FBC5F7] to-[#F61ACB] rounded-[29px] transition-all duration-100"
                                    style={{width: `${progress}%`}}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
