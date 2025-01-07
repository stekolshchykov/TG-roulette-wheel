import CountdownTimerComponent from "@/components/countdown-timer-component";
import GiftModal from "@/modals/gift-modal";
import Image from "next/image";
import React, {useState} from "react";

const GiftComponent = () => {

    const [giftModalStatus, setGiftModalStatus] = useState(false)

    return <>

        <div className={"h-[110px] relative"} onClick={() => setGiftModalStatus(true)}>
            <div
                className="absolute right-4 top-[0px] w-[75px] h-[96px] flex flex-col justify-end items-center cursor-pointer z-[10]">
                <Image
                    src={"/img/gift-CWLyQN-u.png"}
                    alt={"Gift"}
                    width={75}
                    height={75}
                    className={"absolute top-0 left-0 object-contain z-20 animate-pulse-slight"}/>
                <div
                    className="backdrop-blur-[0px] border-t border-[#5A3754] rounded-[5px] h-[52px] flex flex-col items-center justify-end w-[56px]"
                >
                    <p className="text-[8px] font-bold leading-[110%] tracking-[-2%]">Подарок</p>
                    <CountdownTimerComponent size={"small"}/>
                </div>
            </div>
        </div>

        <GiftModal isOpen={giftModalStatus} onAction={(status) => setGiftModalStatus(status)}/>

    </>

};

export default GiftComponent;
