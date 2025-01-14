import {useRootStore} from "@/providers/RootStoreProvider";
import Modal from "@/ui/modal";
import {observer} from "mobx-react-lite";
import Image from "next/image";
import React, {useCallback, useEffect, useState} from "react";

const WinModal = observer(() => {
    const {rouletteStore} = useRootStore();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(rouletteStore.modal === "5k");
        }, 3200);
    }, [rouletteStore.modal]);

    const onClose = useCallback(() => setIsOpen(false), []); // ✅ Обернули в useCallback

    return (
        <Modal fullSize={false} isOpen={isOpen} onClose={onClose}>
            <div className="bg-black rounded-[15px] p-6 w-full h-full relative overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(rgb(72, 13, 63) 0%, rgba(72, 13, 63, 0) 80%)",
                    }}
                ></div>
                <button
                    className="absolute top-4 right-4 z-[70] hover:opacity-80 active:scale-95 transition-all"
                    onClick={onClose}
                >
                    <Image src={"/icon/x.svg"} alt={""} height={27} width={27}/>
                </button>
                <div className="relative z-50 h-full flex flex-col justify-center mt-10">
                    <div
                        className="text-[20.55px] font-proxima font-bold leading-[110%] tracking-[-2%] text-center mb-4">
                        ПОЗДРАВЛЯЕМ! <br/>
                        ВЫ <span className="text-[#E101A8]">ВЫИГРАЛИ</span>
                        <div className="relative flex justify-center mt-2 mb-2 ml-20">
                            <div
                                className="w-[167px] h-[1px] rounded-[18px] bg-gradient-to-r from-transparent to-[#E100A8]"></div>
                        </div>
                        <div className="text-xs">ВОЗМОЖНОСТЬ ПОЛУЧИТЬ</div>
                    </div>
                    <div
                        className="text-[51.3px] font-proxima font-[800] leading-[110%] tracking-[-2%] text-center relative overflow-visible">
                        <span className="absolute left-1/3 -translate-x-5 blur-[25px] text-[#FF31D2] whitespace-nowrap">
                            5000Р
                        </span>
                        <span
                            className="relative text-white whitespace-nowrap"
                            style={{
                                textShadow:
                                    "rgb(225, 0, 168) -1px -1px 0px, rgb(225, 0, 168) 1px -1px 0px, rgb(225, 0, 168) -1px 1px 0px, rgb(225, 0, 168) 1px 1px 0px",
                            }}
                        >
                            5000Р
                        </span>
                        <p className="text-[7.69px] leading-[17px]">
                            Далее оплачиваем 1Р за доступ к подписке на 5 дней
                        </p>
                    </div>
                    <div className="mx-auto">
                        <button
                            className="p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-[12.17px] mt-2 mx-auto z-50 active:scale-95 transition-transform"
                            style={{WebkitTapHighlightColor: "transparent", touchAction: "manipulation"}}
                        >
                            <div
                                className="flex items-center gap-x-1 bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] w-[202px] justify-center h-[44px] rounded-[12px]">
                                <p className="font-bold text-[17px] leading-[110%] tracking-[-2%]">Забрать подарок</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
});

export default WinModal;
