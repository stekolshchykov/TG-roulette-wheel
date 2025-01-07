import CountdownTimerComponent from "@/components/countdown-timer-component";
import ButtonUi from "@/ui/ButtonUi";
import React from "react";

const MainInfo = (props: { spin: number }) => {
    return (
        <div className="px-4 mb-[75px] space-y-[6px] flex-shrink-0">
            <div
                className="rounded-xl border-t border-[#5A3754] backdrop-blur-[0px] bg-[#4E4E4E]/15 max-[360px]:py-3 py-4 flex justify-center items-center gap-x-2">
                <img src={"icon/roulette-accent.svg"} alt="icon" className="w-6 h-6"/>
                <div className="text-white text-lg font-semibold flex gap-2">
                    <div>{props.spin} Вращений</div>
                </div>
            </div>
            <div className={"flex gap-2"}>
                <div className="rounded-xl bg-[#4E4E4E]/15 py-4 flex flex-col justify-center items-center w-full">
                    <div className="text-white text-base text-[13px] flex items-center gap-1">
                        <img src={"icon/spin.svg"} alt="icon" className="w-2 h-2"/>
                        <div>3 вращения</div>
                    </div>
                    <ButtonUi size={"normal"} width={150} onClick={() => {
                    }}>Получить</ButtonUi>
                </div>
                <div className="rounded-xl bg-[#4E4E4E]/15 py-4 flex justify-center items-center w-full flex flex-col">
                    <div className="text-white text-base text-[13px] flex items-center gap-1">
                        <img src={"icon/star.svg"} alt="icon" className="w-2 h-2"/>
                        <div>Бесплатный спин</div>
                    </div>

                    <CountdownTimerComponent size={"normal"} timeLeft={10800}/>
                </div>
            </div>

        </div>
    );
};

export default MainInfo;
