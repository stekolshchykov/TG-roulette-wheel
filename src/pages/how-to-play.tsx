import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

const Step4 = () => {

    return <>

        <div className="pt-28">
            <div className="h-[170px] flex items-center justify-center">
                <div className="w-full transition-transform duration-300 ease-in-out ">
                    <div className="flex flex-col text-center"><p
                        className="font-inter text-[18.75px] font-bold leading-[30px]">Еще <span
                        className="bg-[#DF12A7] px-[2px] py-[1px]"> больше</span> подарков и контента <br/>Наша рулетка
                        лучшая и <br/>честная в Telegram <br/>Крути, выводи купоны, зови <span
                            className="bg-[#DF12A7] px-[2px] py-[1px]"> друзей</span><br/></p></div>
                </div>
            </div>
        </div>


        <div className="relative flex-1 overflow-hidden mt-4">
            <div className="absolute inset-x-0 mt-4 px-4 transition-transform duration-300 ease-in-out "><img
                src="/img/4-Bd1xNMf6.png" alt="Призы"
                className="w-full h-full object-contain"/></div>
            <div className="absolute inset-x-0 bottom-0 pointer-events-none"
                 style={{
                     height: "25%",
                     background: "linear-gradient(to top, rgb(21, 21, 21) 0%, rgba(21, 21, 21, 0.7) 40%, rgba(21, 21, 21, 0) 100%)"
                 }}></div>
        </div>

    </>

}

const Step3 = () => {

    return <>

        <div className="pt-28">
            <div className="h-[170px] flex items-center justify-center">
                <div className="w-full transition-transform duration-300 ease-in-out ">
                    <div className="flex flex-col text-center"><p
                        className="font-inter text-[18px] font-bold leading-[30px]"><span
                        className="bg-[#DF12A7] px-[2px] py-[1px]">Выполняй задания,</span> получай вращения <br/>Куча
                        разных легких заданий, и <br/>за <span
                            className="bg-[#DF12A7] px-[2px] py-[1px]">каждое</span> ценные награды <br/>Оформи карту и
                        получи <span className="bg-[#DF12A7] px-[2px] py-[1px]"> 1000₽ </span><br/></p></div>
                </div>
            </div>
        </div>

        <div className="relative flex-1 overflow-hidden mt-4">
            <div className="absolute inset-x-0 mt-4 px-4 transition-transform duration-300 ease-in-out "><img
                src="/img/3-BMjPCf9n.png" alt="Выполняй задания"
                className="w-full h-full object-contain"/></div>
            <div className="absolute inset-x-0 bottom-0 pointer-events-none"
                 style={{
                     height: "25%",
                     background: "linear-gradient(to top, rgb(21, 21, 21) 0%, rgba(21, 21, 21, 0.7) 40%, rgba(21, 21, 21, 0) 100%)"
                 }}></div>
        </div>

    </>

}

const Step2 = () => {

    return <>
        <div className="pt-28">
            <div className="h-[170px] flex items-center justify-center">
                <div className="w-full transition-transform duration-300 ease-in-out ">
                    <div className="flex flex-col text-center"><p
                        className="font-inter text-[20.75px] font-bold leading-[30px]"><span
                        className="bg-[#DF12A7] px-[2px] py-[1px]">Приглашай друзей,</span> получай вращения <br/>За
                        каждого друга получишь по <br/>1 бесплатному <span
                            className="bg-[#DF12A7] px-[2px] py-[1px]">вращению</span> <br/>Чем больше друзей, тем
                        больше <br/><span className="bg-[#DF12A7] px-[2px] py-[1px]">шанс выиграть</span> призы</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative flex-1 overflow-hidden mt-4">
            <div className="absolute inset-x-0 mt-4 px-4 transition-transform duration-300 ease-in-out "><img
                src="/img/2-yXLzWTAL.png" alt="Приглашай друзей"
                className="w-full h-full object-contain"/></div>
            <div className="absolute inset-x-0 bottom-0 pointer-events-none"
                 style={{
                     height: "25%",
                     background: "linear-gradient(to top, rgb(21, 21, 21) 0%, rgba(21, 21, 21, 0.7) 40%, rgba(21, 21, 21, 0) 100%)"
                 }}></div>
        </div>
    </>

}

const Step1 = () => {

    return <>
        <div className="pt-28">
            <div className="h-[170px] flex items-center justify-center">
                <div className="w-full transition-transform duration-300 ease-in-out ">
                    <div className="flex flex-col text-center"><p
                        className="font-inter text-[24.75px] font-bold leading-[32px]"><span
                        className="bg-[#DF12A7] px-[2px]">Выиграй</span> один из десятка<br/>призов от
                        нашей <span className="bg-[#DF12A7] px-[2px] py-[2px]">рулетки</span></p><p
                        className="font-proxima opacity-70 text-[10px] font-bold leading-[12px] mt-2">500₽,
                        5000₽ и целых 30000₽</p>
                        <div className="relative mx-auto"><p
                            className="font-inter font-bold text-[16px] leading-[19px] text-[#E100A8] opacity-58 blur-[33px] absolute top-0 left-0">Также
                            супер приз IPhone 16 Pro!</p><p
                            className="font-inter font-bold text-[16px] leading-[19px] text-[#E100A8] mt-1 relative">Также
                            супер приз IPhone 16 Pro!</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative flex-1 overflow-hidden mt-4">
            <div className="absolute inset-x-0 mt-4 px-4 transition-transform duration-300 ease-in-out ">
                <img src="/img/1-9TiaueIE.png" alt="Выигрывай призы"
                     className="w-full h-full object-contain"/></div>
            <div
                className="absolute inset-x-0 bottom-0 pointer-events-none"
                style={{
                    height: "25%",
                    background: "linear-gradient(to top, rgb(21, 21, 21) 0%, rgba(21, 21, 21, 0.7) 40%, rgba(21, 21, 21, 0) 100%)"
                }}
            ></div>

        </div>
    </>

}

const HowToPlay = () => {

    const [currentStep, setCurrentStep] = useState(0)

    const moveHandler = (direction: "back" | "forward") => {
        if (direction == "back") {
            if (currentStep === 0) {
                setCurrentStep(3)
            } else {
                setCurrentStep(currentStep - 1)
            }
        } else {
            if (currentStep === 3) {
                setCurrentStep(0)
            } else {
                setCurrentStep(currentStep + 1)
            }
        }
    }

    return <>
        <div className="h-screen w-full relative bg-[#151515] overflow-hidden font-proxima text-white">
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src="/img/mainglow-Dj1P_1uN.webp" width="500" height="300" alt=""
                    className="absolute left-1/2 w-full bottom-[-20%]"
                    style={{transform: "translate(-50%, -50%) scale(5)"}}/>
                <img
                    src="/img/barright-gAs5sVTc.webp" width="200" height="200"
                    className="absolute bottom-[0%]" style={{transform: "scale(2) translateX(55%)"}}/>
                <img
                    src="/img/barleft-CoQDTOqx.webp" width="200" height="200"
                    className="absolute bottom-[0%]" style={{transform: "scale(2) translateX(-20%)"}}/>
                <img
                    src="/img/whiteroung-DPfb6hRO.webp" width="300" height="300"
                    className="absolute bottom-[-24%]" style={{transform: "scale(2)"}}/>
                <img
                    src="/img/bottomglow-De6_kfy1.webp" width="300" height="300"
                    className="absolute bottom-[-22%]" style={{transform: "scale(2)"}}/>
            </div>
            <div className="fixed inset-0 bg-[#151515] z-[80]">
                <div className="h-full flex flex-col relative">
                    <div
                        className="absolute left-0 right-0 top-0 pointer-events-none"
                        style={{
                            height: "100px",
                            background: "linear-gradient(rgba(225, 0, 168, 0.1) 0%, rgba(225, 0, 168, 0) 70%)"
                        }}
                    ></div>

                    <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-20">
                        <div className="relative w-40 h-40"><img
                            src="/img/logo3-DX90R18s.png" alt="Logo"
                            className="w-full h-full object-contain"/></div>
                    </div>
                    <button
                        className="absolute right-4 top-4 z-20 w-12 h-12 flex items-center justify-center  text-white/60">
                        <Link href={"/"}> <Image src={"/icon/x.svg"} alt={""} height={27} width={27}/></Link>
                    </button>
                    <div className="absolute top-[30%] left-0 right-0 z-10"><img
                        src="data:image/png;base64,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"
                        alt="Stars" className="w-full h-auto object-contain"/></div>


                    {currentStep === 0 && <Step1/>}
                    {currentStep === 1 && <Step2/>}
                    {currentStep === 2 && <Step3/>}
                    {currentStep === 3 && <Step4/>}

                    <div className="p-6 bg-[#151515] relative">
                        <div
                            className="absolute left-0 right-0 bottom-0 pointer-events-none"
                            style={{
                                height: "300px",
                                background: "linear-gradient(to top, rgba(225, 1, 168, 0.1) 0%, rgba(225, 1, 168, 0) 100%)"
                            }}
                        ></div>

                        <div className="flex items-center justify-between gap-4 relative z-10">
                            <button
                                className="p-3 rounded-full bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => moveHandler("back")}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-chevron-left w-6 h-6">
                                    <path d="m15 18-6-6 6-6"></path>
                                </svg>
                            </button>
                            <div className="flex gap-3">

                                <button className={
                                    currentStep === 0
                                        ? "w-2 h-2 rounded-full transition-colors bg-gradient-to-b from-[#E204A9] to-[#FE5FD6]"
                                        : `w-2 h-2 rounded-full transition-colors bg-white/20`
                                }></button>

                                <button className={
                                    currentStep === 1
                                        ? "w-2 h-2 rounded-full transition-colors bg-gradient-to-b from-[#E204A9] to-[#FE5FD6]"
                                        : `w-2 h-2 rounded-full transition-colors bg-white/20`
                                }></button>

                                <button className={
                                    currentStep === 2
                                        ? "w-2 h-2 rounded-full transition-colors bg-gradient-to-b from-[#E204A9] to-[#FE5FD6]"
                                        : `w-2 h-2 rounded-full transition-colors bg-white/20`
                                }></button>

                                <button className={
                                    currentStep === 3
                                        ? "w-2 h-2 rounded-full transition-colors bg-gradient-to-b from-[#E204A9] to-[#FE5FD6]"
                                        : `w-2 h-2 rounded-full transition-colors bg-white/20`
                                }></button>
                            </div>
                            <button className="p-3 rounded-full bg-gradient-to-b from-[#E204A9] to-[#FE5FD6]"
                                    onClick={() => moveHandler("forward")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-chevron-right w-6 h-6">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>

}

export default HowToPlay
