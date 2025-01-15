import Modal from "@/ui/modal";
import Image from "next/image";
import React from "react";
import {useRootStore} from "@/providers/RootStoreProvider";

interface Props {
    isOpen: boolean
    onAction: (status: boolean) => void
}

const GiftModal = (props: Props) => {
    const {profileStore} = useRootStore()

    const handleClick = () => {
        window.Telegram.WebApp.openLink(profileStore.data.gift_link)
    };

    return <Modal
        fullSize={false}
        isOpen={props.isOpen}
        onClose={() => props.onAction(false)}
    >
        <div className="bg-black rounded-[15px] p-6 w-full h-full relative overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(rgb(72, 13, 63) 0%, rgba(72, 13, 63, 0) 80%)",
                }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                    <div
                        className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[158px] h-[158px]">
                        <div
                            className="w-full h-full relative"
                            style={{maskImage: "linear-gradient(black 10%, transparent 100%)"}}
                        >
                            <Image
                                src="/img/prize-DTbtyTEA.webp"
                                alt="Prize"
                                width={1100}
                                height={1500}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="absolute top-4 right-4 z-[70] hover:opacity-80 active:scale-95 transition-all"
                onClick={() => props.onAction(false)}
            >
                <svg
                    width="27.383362"
                    height="27.293045"
                    viewBox="0 0 27.3834 27.293"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20.6405 6.90352C20.1971 6.46018 19.4784 6.46018 19.035 6.90352L13.7369 12.2016L8.43884 6.90355C7.99548 6.46021 7.27667 6.46021 6.83337 6.90355C6.39001 7.34689 6.39001 8.06569 6.83337 8.50903L12.1314 13.8071L6.99396 18.9446C6.55066 19.3879 6.55066 20.1067 6.99396 20.55C7.43732 20.9934 8.15613 20.9934 8.59943 20.55L13.7369 15.4126L18.8744 20.5501C19.3177 20.9934 20.0365 20.9934 20.4799 20.5501C20.9232 20.1067 20.9232 19.3879 20.4799 18.9446L15.3424 13.8071L20.6405 8.50899C21.0839 8.06565 21.0839 7.34686 20.6405 6.90352Z"
                        fill="#FFFFFF"
                    />
                </svg>
            </button>
            <div className="relative z-50 h-full flex flex-col justify-center mt-10">
                <div
                    className="text-[20.55px] font-proxima font-bold leading-[110%] tracking-[-2%] text-center mb-4">
                    <Image
                        src="/img/textlogo-CNagRihx.webp"
                        alt="WB"
                        width={67}
                        height={33}
                        className="inline-block object-cover"
                        style={{transform: "scale(3)", width: "37px", display: "inline-block"}}
                    />
                    <span className="text-[#E101A8]" style={{marginLeft: "5px"}}>рулетка</span> - Дарит подарок от
                    партнера
                    <br/>
                    каждому <span className="text-[#E101A8]">своему участнику</span>
                    <div className="relative flex justify-center mt-2 ml-20">
                        <div
                            className="w-[167px] h-[1px] rounded-[18px] bg-gradient-to-r from-transparent to-[#E100A8]"></div>
                        <div
                            className="w-[167px] h-[1px] rounded-[18px] bg-gradient-to-r from-transparent to-[#E100A8] absolute top-0"
                            style={{filter: "blur(10px)"}}
                        ></div>
                    </div>
                </div>
                <div
                    className="text-[51.3px] font-proxima font-[800] leading-[110%] tracking-[-2%] text-center relative overflow-visible">
                <span
                    className="absolute left-1/3 -translate-x-5 blur-[25px] text-[#FF31D2] whitespace-nowrap"
                >
                    1000Р
                </span>
                    <span
                        className="relative text-white whitespace-nowrap"
                        style={{
                            textShadow:
                                "rgb(225, 0, 168) -1px -1px 0px, rgb(225, 0, 168) 1px -1px 0px, rgb(225, 0, 168) -1px 1px 0px, rgb(225, 0, 168) 1px 1px 0px",
                        }}
                    >
                    1000Р
                </span>
                    <div className="relative flex justify-center w-full mt-2">
                        <div className="relative w-[150px]">
                            <div className="w-full h-[1px] border-[1px] border-[rgb(251,12,190)]"></div>
                            <div
                                className="w-full h-[1px] border-[1px] border-[rgb(251,12,190)] blur-[12.6px] opacity-90 absolute top-0"
                            ></div>
                        </div>
                    </div>
                    <p className="text-[7.69px] leading-[17px]">
                        Далее оплачиваем 1Р за доступ к подписке на 5 дней
                    </p>
                </div>
                <div className="mx-auto">
                    <button
                        className="p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-[12.17px] mt-2 mx-auto z-50 active:scale-95 transition-transform"
                        style={{WebkitTapHighlightColor: "transparent", touchAction: "manipulation"}}
                        onClick={handleClick}
                    >
                        <div
                            className="flex items-center gap-x-1 bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] w-[202px] justify-center h-[44px] rounded-[12px]">
                            <p className="font-bold text-[17px] leading-[110%] tracking-[-2%]">Забрать
                                подарок</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </Modal>

}
export default GiftModal
