import Image from "next/image";
import {useRouter} from "next/router";
import React from "react";

const PageLayout = (props: { children?: React.ReactNode }) => {
    const router = useRouter();
    const isMainPage = router.pathname === "/roulettte";

    return (
        <>
            <main className="relative z-10 text-white font-proxima">
                {/* Фоновый контейнер */}
                <div className="fixed inset-0 -z-10 bg-[#151515] overflow-y-auto">
                    {isMainPage ? (
                        <div className="absolute inset-0 pointer-events-none">
                            <Image
                                src="/img/mainglow-Dj1P_1uN.webp"
                                width={500}
                                height={300}
                                alt=""
                                className="absolute left-1/2 w-full bottom-[-20%]"
                                style={{transform: "translate(-50%, -50%) scale(5)"}}
                            />
                            <Image
                                src="/img/barright-gAs5sVTc.webp"
                                width={200}
                                height={200}
                                alt=""
                                className="absolute bottom-0"
                                style={{transform: "scale(2) translateX(55%)"}}
                            />
                            <Image
                                src="/img/barleft-CoQDTOqx.webp"
                                width={200}
                                height={200}
                                alt=""
                                className="absolute bottom-0"
                                style={{transform: "scale(2) translateX(-20%)"}}
                            />
                            <Image
                                src="/img/whiteroung-DPfb6hRO.webp"
                                width={300}
                                height={300}
                                alt=""
                                className="absolute bottom-[-24%]"
                                style={{transform: "scale(2)"}}
                            />
                            <Image
                                src="/img/bottomglow-De6_kfy1.webp"
                                width={300}
                                height={300}
                                alt=""
                                className="absolute bottom-[-22%]"
                                style={{transform: "scale(2)"}}
                            />
                        </div>
                    ) : (
                        <div className="absolute inset-0 overflow-hidden h-[200px] ">
                            <Image
                                className="w-full h-full object-cover"
                                src="/img/topglow-CCU_uSUO.png"
                                width={1920}
                                height={200}
                                alt=""
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/10 to-transparent"/>
                        </div>
                    )}
                </div>

                {/* Контейнер контента */}
                <div className="container mx-auto p-4">{props.children}</div>
            </main>
        </>
    );
};

export default PageLayout;
