import CountdownTimerComponent from "@/components/countdown-timer-component";
import {useRootStore} from "@/providers/RootStoreProvider";
import ButtonUi from "@/ui/button-ui";
import {observer} from "mobx-react-lite";
import Image from "next/image";
import React from "react";

const MainInfo = observer((props: { spin: number }) => {

    const {rouletteStore, dataStore} = useRootStore()

    return (
        <div className="px-4 mb-[75px] space-y-[6px] flex-shrink-0">
            <div
                className="rounded-xl border-t border-[#5A3754] backdrop-blur-[0px] bg-[#4E4E4E]/15 max-[360px]:py-3 py-4 flex justify-center items-center gap-x-2">
                <Image src="/icon/roulette-accent.svg" alt="icon" width={24} height={24}/>
                <div className="text-white text-lg font-semibold flex gap-2">
                    <div>{props.spin} Вращений</div>
                </div>
            </div>
            <div className={"flex gap-2"}>
                <div className="rounded-xl bg-[#4E4E4E]/15 py-4 flex flex-col justify-center items-center w-full">
                    <div className="text-white text-base text-[13px] flex items-center gap-1">
                        <Image src="/icon/spin.svg" alt="icon" width={8} height={8}/>
                        <div>3 вращения</div>
                    </div>
                    <ButtonUi
                        size={"normal"}
                        width={150}
                        isDisabled={!dataStore.data.is_referral_bonus_available}
                        onClick={() => rouletteStore.getBonus()}>
                        Получить
                    </ButtonUi>

                </div>
                <div className="rounded-xl bg-[#4E4E4E]/15 py-4 flex justify-center items-center w-full flex-col">
                    <div className="text-white text-base text-[13px] flex items-center gap-1">
                        <Image src="/icon/star.svg" alt="icon" width={8} height={8}/>
                        <div>Бесплатный спин</div>
                    </div>

                    <CountdownTimerComponent size={"normal"}/>
                </div>
            </div>
        </div>
    );
})

export default MainInfo;
