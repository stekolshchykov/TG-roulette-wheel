import {useRouter} from "next/router";
import React from "react";

const PageLayout = (props: { children?: React.ReactNode }) => {
    const router = useRouter();
    const isMainPage = router.pathname === "/";

    return (
        <>
            <main className="relative z-10 text-white font-proxima">

                {/* Фоновый контейнер */}
                <div className="fixed inset-0 -z-10 bg-[#151515] overflow-hidden">
                    {isMainPage ? (
                        // Фон для главной страницы
                        <div className="absolute inset-0 pointer-events-none">
                            <img
                                src="https://v2.wbruletka.games/assets/mainglow-Dj1P_1uN.webp"
                                width={500}
                                height={300}
                                alt=""
                                className="absolute left-1/2 w-full bottom-[-20%]"
                                style={{transform: "translate(-50%, -50%) scale(5)"}}
                            />
                            <img
                                src="https://v2.wbruletka.games/assets/barright-gAs5sVTc.webp"
                                width={200}
                                height={200}
                                alt=""
                                className="absolute bottom-0"
                                style={{transform: "scale(2) translateX(55%)"}}
                            />
                            <img
                                src="https://v2.wbruletka.games/assets/barleft-CoQDTOqx.webp"
                                width={200}
                                height={200}
                                alt=""
                                className="absolute bottom-0"
                                style={{transform: "scale(2) translateX(-20%)"}}
                            />
                            <img
                                src="https://v2.wbruletka.games/assets/whiteroung-DPfb6hRO.webp"
                                width={300}
                                height={300}
                                alt=""
                                className="absolute bottom-[-24%]"
                                style={{transform: "scale(2)"}}
                            />
                            <img
                                src="https://v2.wbruletka.games/assets/bottomglow-De6_kfy1.webp"
                                width={300}
                                height={300}
                                alt=""
                                className="absolute bottom-[-22%]"
                                style={{transform: "scale(2)"}}
                            />
                        </div>
                    ) : (
                        // Фон для внутренних страниц
                        <div className="absolute inset-0 overflow-hidden h-[150px]">
                            <img
                                src="https://v2.wbruletka.games/assets/topglow-CCU_uSUO.png"
                                alt="Background mask"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </div>

                {/* Контейнер контента */}
                <div className="container mx-auto p-4">{props?.children}</div>
            </main>
        </>
    );
};

export default PageLayout;
