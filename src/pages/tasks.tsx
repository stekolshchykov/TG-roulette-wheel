import PageLayout from "@/layout/page-layout";
import {observer} from "mobx-react-lite";

const Tasks = observer(() => {

    return <PageLayout>

        <div className="relative z-10 flex flex-col items-center text-center"><p
            className="text-[32.14px] font-bold leading-[110%] tracking-[-2%]">Задания</p><p
            className="text-[10.71px] leading-[110%] tracking-[-2%] opacity-50 mt-1">Выполняй задания и получай
            вращение</p></div>

        <div className=" border px-5 py-4 flex flex-col border-[#202023] mt-5 rounded-[24px]">
            <div className="flex items-center justify-between"><p className="text-[20px] font-bold leading-[24px]">Карта
                от партнера</p>
                {/*<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"*/}
                {/*     xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                {/*    <desc>*/}
                {/*        Created with Pixso.*/}
                {/*    </desc>*/}
                {/*    <defs>*/}
                {/*        <linearGradient x1="10" y1="0" x2="10" y2="20" id="paint_linear_1_463_0"*/}
                {/*                        gradientUnits="userSpaceOnUse">*/}
                {/*            <stop stop-color="#69D3FF"></stop>*/}
                {/*            <stop offset="1" stop-color="#00A4E8"></stop>*/}
                {/*        </linearGradient>*/}
                {/*        <linearGradient x1="10.255161" y1="0" x2="10.255161" y2="19.710983" id="paint_linear_1_463_1"*/}
                {/*                        gradientUnits="userSpaceOnUse">*/}
                {/*            <stop stop-color="#FFB500"></stop>*/}
                {/*            <stop offset="1" stop-color="#F3BA2F"></stop>*/}
                {/*        </linearGradient>*/}
                {/*        <linearGradient x1="10" y1="20" x2="10" y2="0" id="paint_linear_1_463_2"*/}
                {/*                        gradientUnits="userSpaceOnUse">*/}
                {/*            <stop stop-color="#FF60D7"></stop>*/}
                {/*            <stop offset="1" stop-color="#E100A8"></stop>*/}
                {/*        </linearGradient>*/}
                {/*    </defs>*/}
                {/*    <rect id="Rectangle 34625118" rx="10" width="20" height="20" fill="#D9D9D9" fill-opacity="1"></rect>*/}
                {/*    <rect id="Rectangle 34625118" rx="10" width="20" height="20" fill="url(#paint_linear_1_463_0)"*/}
                {/*          fill-opacity="0"></rect>*/}
                {/*    <rect id="Rectangle 34625118" rx="10" width="20" height="20" fill="url(#paint_linear_1_463_1)"*/}
                {/*          fill-opacity="1"></rect>*/}
                {/*    <rect id="Rectangle 34625118" rx="10" width="20" height="20" fill="#151517" fill-opacity="1"></rect>*/}
                {/*    <rect id="Rectangle 34625118" rx="10" width="20" height="20" fill="url(#paint_linear_1_463_2)"*/}
                {/*          fill-opacity="1"></rect>*/}
                {/*    <rect id="Rectangle 34625118" x="0.276367" y="0.276382" rx="9.723619" width="19.447237"*/}
                {/*          height="19.447237" stroke="#050505" stroke-opacity="0" stroke-width="0.552764"></rect>*/}
                {/*    <rect id="Rectangle 34625118" x="0.276367" y="0.276382" rx="9.723619" width="19.447237"*/}
                {/*          height="19.447237" stroke="#FF72DB" stroke-opacity="0.5" stroke-width="0.552764"></rect>*/}
                {/*    <path id="?"*/}
                {/*          d="M8.67 10.09C8.67 10.58 8.84 10.99 9.13 11.31L10.64 10.87C10.5 10.74 10.39 10.51 10.39 10.29C10.39 9.12 12.71 8.97 12.71 6.94C12.71 5.65 11.61 4.75 9.82 4.75C8.63 4.75 7.52 5.24 6.79 6.1L7.91 7.36C8.34 6.85 8.92 6.5 9.62 6.5C10.38 6.5 10.7 6.86 10.7 7.29C10.7 8.25 8.67 8.44 8.67 10.09ZM8.67 13.17C8.67 13.78 9.19 14.29 9.8 14.29C10.41 14.29 10.92 13.78 10.92 13.17C10.92 12.56 10.41 12.05 9.8 12.05C9.19 12.05 8.67 12.56 8.67 13.17Z"*/}
                {/*          fill="#FFFFFF" fill-opacity="1" fill-rule="evenodd"></path>*/}
                {/*</svg>*/}
            </div>
            <p className="text-[12px] leading-[15px] opacity-20 font-normal">Оформи банковскую карту по ссылке и
                получи <br/>деньги на покупки в маркетплейсах и т.п</p>
            <div className=" bg-[#1D1D20] border-[0.89px] border-[#202023] rounded-[21.44px] flex flex-col mt-1">
                <div className="flex flex-row justify-center mt-3 gap-x-3">
                    <img
                        src="data:image/webp;base64,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"
                        alt="Bank logo" className="w-[51.66px] h-[66px]"/>
                    <div className="flex flex-col"><p className="text-[16px] font-bold leading-[19px] mt-1">Получи
                        1000<span className="font-gilroy">₽</span> от Альфа </p><p
                        className="text-[12px] leading-[15px] opacity-20 mt-2">Сделай покупку от 1000₽ и <br/>получи
                        кэшбек в 1000₽ обратно</p></div>
                </div>
                <div className="flex justify-center w-full ">
                    <button
                        className="w-[259px] p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-[12.17px] mt-3">
                        <div
                            className="flex items-center gap-x-1 bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] w-full justify-center h-[44px] rounded-[12px] ">
                            <p className="font-bold text-[14.75px] leading-[110%] tracking-[-2%]">Забрать карту</p>
                        </div>
                    </button>
                </div>
                <div className="justify-center flex"><p className="opacity-10 text-[7.2px] leading-[9px]">Ао
                    Альфа-банк (ИНН 7728168971)</p></div>
            </div>
        </div>

        <div className="rounded-t-[24px] border-t border-[#202023] mt-5 h-[430px] px-5"><p
            className="text-[20px] font-bold leading-[24px] mt-3">Задания</p>
            <div className="flex flex-col gap-y-2 mt-2">
                <div
                    className="relative border-[0.68px] border-[#202023] rounded-[16.34px] h-[55px] flex items-center justify-between px-4">
                    <div className="flex items-center gap-x-3">
                        <div className="relative w-12 h-12">
                            <div className="absolute -top-4 -left-4 ">
                                {/*<svg width="76.599976" height="76.366302" viewBox="0 0 76.6 76.3663" fill="none"*/}
                                {/*     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                {/*    <desc>*/}
                                {/*        Created with Pixso.*/}
                                {/*    </desc>*/}
                                {/*    <defs>*/}
                                {/*        <filter id="filter_1_523_dd" x="0" y="0" width="76.599976" height="76.366302"*/}
                                {/*                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">*/}
                                {/*            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>*/}
                                {/*            <feColorMatrix in="SourceAlpha" type="matrix"*/}
                                {/*                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"*/}
                                {/*                           result="hardAlpha"></feColorMatrix>*/}
                                {/*            <feOffset dx="0" dy="0"></feOffset>*/}
                                {/*            <feGaussianBlur stdDeviation="5.93333"></feGaussianBlur>*/}
                                {/*            <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1"></feComposite>*/}
                                {/*            <feColorMatrix type="matrix"*/}
                                {/*                           values="0 0 0 0 0.88235 0 0 0 0 0 0 0 0 0 0.65882 0 0 0 0.25 0"></feColorMatrix>*/}
                                {/*            <feBlend mode="normal" in2="BackgroundImageFix"*/}
                                {/*                     result="effect_dropShadow_1"></feBlend>*/}
                                {/*            <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow_1"*/}
                                {/*                     result="shape"></feBlend>*/}
                                {/*        </filter>*/}
                                {/*        <linearGradient x1="38.299988" y1="17.799988" x2="38.299988" y2="58.566311"*/}
                                {/*                        id="paint_linear_1_524_0" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#69D3FF"></stop>*/}
                                {/*            <stop offset="1" stop-color="#00A4E8"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*        <linearGradient x1="38.823067" y1="17.799988" x2="38.823067" y2="57.977203"*/}
                                {/*                        id="paint_linear_1_524_1" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#FFB500"></stop>*/}
                                {/*            <stop offset="1" stop-color="#F3BA2F"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*        <linearGradient x1="38.299984" y1="58.566311" x2="38.299984" y2="17.799988"*/}
                                {/*                        id="paint_linear_1_524_2" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#FF60D7"></stop>*/}
                                {/*            <stop offset="1" stop-color="#E100A8"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*    </defs>*/}
                                {/*    <g filter="url(#filter_1_523_dd)">*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="#D9D9D9" fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_0)"*/}
                                {/*              fill-opacity="0"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_1)"*/}
                                {/*              fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="#151517" fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_2)"*/}
                                {/*              fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="18.363342" y="18.363342" rx="19.819807"*/}
                                {/*              width="39.873291" height="39.639614" stroke="#050505" stroke-opacity="0"*/}
                                {/*              stroke-width="1.126708"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="18.363342" y="18.363342" rx="19.819807"*/}
                                {/*              width="39.873291" height="39.639614" stroke="#FF72DB" stroke-opacity="0.5"*/}
                                {/*              stroke-width="1.126708"></rect>*/}
                                {/*        <path id="?"*/}
                                {/*              d="M36.02 42.21L39.02 42.21C39.02 41.7 39.18 41.2 39.49 40.72C39.81 40.23 40.19 39.78 40.64 39.36C41.09 38.92 41.55 38.48 42 38.03C42.45 37.57 42.83 37.03 43.15 36.38C43.46 35.74 43.62 35.06 43.62 34.34C43.62 32.78 43.05 31.55 41.92 30.66Q41.44 30.28 40.91 30.01Q39.58 29.33 37.9 29.33Q36.33 29.33 35.01 29.91Q34.57 30.1 34.16 30.35Q33.45 30.8 32.92 31.4Q32.23 32.17 31.84 33.2L34.43 34.66Q34.73 33.76 35.34 33.18Q35.51 33.02 35.7 32.88C36.3 32.46 37 32.25 37.82 32.25C38.67 32.25 39.35 32.46 39.86 32.86Q40.13 33.08 40.31 33.36Q40.61 33.85 40.61 34.53C40.61 35.03 40.46 35.53 40.14 36.02Q39.67 36.75 39 37.37C38.54 37.77 38.09 38.2 37.64 38.65C37.18 39.09 36.8 39.62 36.49 40.25C36.17 40.86 36.02 41.51 36.02 42.21ZM38.92 44.92C38.53 44.54 38.07 44.35 37.53 44.35Q37.08 44.35 36.7 44.52Q36.38 44.66 36.12 44.92Q35.87 45.19 35.73 45.51Q35.57 45.87 35.57 46.31C35.57 46.85 35.77 47.31 36.15 47.69C36.53 48.07 36.99 48.26 37.53 48.26Q37.93 48.26 38.28 48.12Q38.63 47.98 38.92 47.69C39.3 47.31 39.49 46.85 39.49 46.31Q39.49 45.91 39.35 45.56Q39.21 45.21 38.92 44.92Z"*/}
                                {/*              fill="#FFFFFF" fill-opacity="1" fill-rule="evenodd"></path>*/}
                                {/*    </g>*/}
                                {/*</svg>*/}
                            </div>
                        </div>
                        <div className="flex flex-col"><p className="text-[13px] font-bold leading-[16px]">Подпишись на
                            канал</p><p className="text-[11px] leading-[11px] opacity-50">+1 Вращение</p></div>
                    </div>
                    <button className="p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-xl">
                        <div
                            className="flex items-center gap-x-1 bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] px-4 h-8 rounded-xl">
                            <p className="font-bold text-xs leading-[110%] tracking-[-2%] whitespace-nowrap">Перейти</p>
                        </div>
                    </button>
                </div>
                <div
                    className="relative border-[0.68px] border-[#202023] rounded-[16.34px] h-[55px] flex items-center justify-between px-4">
                    <div className="flex items-center gap-x-3">
                        <div className="relative w-12 h-12">
                            <div className="absolute -top-4 -left-4 ">
                                {/*<svg width="76.599976" height="76.366302" viewBox="0 0 76.6 76.3663" fill="none"*/}
                                {/*     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                {/*    <desc>*/}
                                {/*        Created with Pixso.*/}
                                {/*    </desc>*/}
                                {/*    <defs>*/}
                                {/*        <filter id="filter_1_523_dd" x="0" y="0" width="76.599976" height="76.366302"*/}
                                {/*                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">*/}
                                {/*            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>*/}
                                {/*            <feColorMatrix in="SourceAlpha" type="matrix"*/}
                                {/*                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"*/}
                                {/*                           result="hardAlpha"></feColorMatrix>*/}
                                {/*            <feOffset dx="0" dy="0"></feOffset>*/}
                                {/*            <feGaussianBlur stdDeviation="5.93333"></feGaussianBlur>*/}
                                {/*            <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1"></feComposite>*/}
                                {/*            <feColorMatrix type="matrix"*/}
                                {/*                           values="0 0 0 0 0.88235 0 0 0 0 0 0 0 0 0 0.65882 0 0 0 0.25 0"></feColorMatrix>*/}
                                {/*            <feBlend mode="normal" in2="BackgroundImageFix"*/}
                                {/*                     result="effect_dropShadow_1"></feBlend>*/}
                                {/*            <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow_1"*/}
                                {/*                     result="shape"></feBlend>*/}
                                {/*        </filter>*/}
                                {/*        <linearGradient x1="38.299988" y1="17.799988" x2="38.299988" y2="58.566311"*/}
                                {/*                        id="paint_linear_1_524_0" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#69D3FF"></stop>*/}
                                {/*            <stop offset="1" stop-color="#00A4E8"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*        <linearGradient x1="38.823067" y1="17.799988" x2="38.823067" y2="57.977203"*/}
                                {/*                        id="paint_linear_1_524_1" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#FFB500"></stop>*/}
                                {/*            <stop offset="1" stop-color="#F3BA2F"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*        <linearGradient x1="38.299984" y1="58.566311" x2="38.299984" y2="17.799988"*/}
                                {/*                        id="paint_linear_1_524_2" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#FF60D7"></stop>*/}
                                {/*            <stop offset="1" stop-color="#E100A8"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*    </defs>*/}
                                {/*    <g filter="url(#filter_1_523_dd)">*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="#D9D9D9" fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_0)"*/}
                                {/*              fill-opacity="0"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_1)"*/}
                                {/*              fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="#151517" fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_2)"*/}
                                {/*              fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="18.363342" y="18.363342" rx="19.819807"*/}
                                {/*              width="39.873291" height="39.639614" stroke="#050505" stroke-opacity="0"*/}
                                {/*              stroke-width="1.126708"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="18.363342" y="18.363342" rx="19.819807"*/}
                                {/*              width="39.873291" height="39.639614" stroke="#FF72DB" stroke-opacity="0.5"*/}
                                {/*              stroke-width="1.126708"></rect>*/}
                                {/*        <path id="?"*/}
                                {/*              d="M36.02 42.21L39.02 42.21C39.02 41.7 39.18 41.2 39.49 40.72C39.81 40.23 40.19 39.78 40.64 39.36C41.09 38.92 41.55 38.48 42 38.03C42.45 37.57 42.83 37.03 43.15 36.38C43.46 35.74 43.62 35.06 43.62 34.34C43.62 32.78 43.05 31.55 41.92 30.66Q41.44 30.28 40.91 30.01Q39.58 29.33 37.9 29.33Q36.33 29.33 35.01 29.91Q34.57 30.1 34.16 30.35Q33.45 30.8 32.92 31.4Q32.23 32.17 31.84 33.2L34.43 34.66Q34.73 33.76 35.34 33.18Q35.51 33.02 35.7 32.88C36.3 32.46 37 32.25 37.82 32.25C38.67 32.25 39.35 32.46 39.86 32.86Q40.13 33.08 40.31 33.36Q40.61 33.85 40.61 34.53C40.61 35.03 40.46 35.53 40.14 36.02Q39.67 36.75 39 37.37C38.54 37.77 38.09 38.2 37.64 38.65C37.18 39.09 36.8 39.62 36.49 40.25C36.17 40.86 36.02 41.51 36.02 42.21ZM38.92 44.92C38.53 44.54 38.07 44.35 37.53 44.35Q37.08 44.35 36.7 44.52Q36.38 44.66 36.12 44.92Q35.87 45.19 35.73 45.51Q35.57 45.87 35.57 46.31C35.57 46.85 35.77 47.31 36.15 47.69C36.53 48.07 36.99 48.26 37.53 48.26Q37.93 48.26 38.28 48.12Q38.63 47.98 38.92 47.69C39.3 47.31 39.49 46.85 39.49 46.31Q39.49 45.91 39.35 45.56Q39.21 45.21 38.92 44.92Z"*/}
                                {/*              fill="#FFFFFF" fill-opacity="1" fill-rule="evenodd"></path>*/}
                                {/*    </g>*/}
                                {/*</svg>*/}
                            </div>
                        </div>
                        <div className="flex flex-col"><p className="text-[13px] font-bold leading-[16px]">Подпишись на
                            канал</p><p className="text-[11px] leading-[11px] opacity-50">+1 Вращение</p></div>
                    </div>
                    <button className="p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-xl">
                        <div
                            className="flex items-center gap-x-1 bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] px-4 h-8 rounded-xl">
                            <p className="font-bold text-xs leading-[110%] tracking-[-2%] whitespace-nowrap">Перейти</p>
                        </div>
                    </button>
                </div>
                <div
                    className="relative border-[0.68px] border-[#202023] rounded-[16.34px] h-[55px] flex items-center justify-between px-4">
                    <div className="flex items-center gap-x-3">
                        <div className="relative w-12 h-12">
                            <div className="absolute -top-4 -left-4 ">
                                {/*<svg width="76.599976" height="76.366302" viewBox="0 0 76.6 76.3663" fill="none"*/}
                                {/*     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                {/*    <desc>*/}
                                {/*        Created with Pixso.*/}
                                {/*    </desc>*/}
                                {/*    <defs>*/}
                                {/*        <filter id="filter_1_523_dd" x="0" y="0" width="76.599976" height="76.366302"*/}
                                {/*                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">*/}
                                {/*            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>*/}
                                {/*            <feColorMatrix in="SourceAlpha" type="matrix"*/}
                                {/*                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"*/}
                                {/*                           result="hardAlpha"></feColorMatrix>*/}
                                {/*            <feOffset dx="0" dy="0"></feOffset>*/}
                                {/*            <feGaussianBlur stdDeviation="5.93333"></feGaussianBlur>*/}
                                {/*            <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1"></feComposite>*/}
                                {/*            <feColorMatrix type="matrix"*/}
                                {/*                           values="0 0 0 0 0.88235 0 0 0 0 0 0 0 0 0 0.65882 0 0 0 0.25 0"></feColorMatrix>*/}
                                {/*            <feBlend mode="normal" in2="BackgroundImageFix"*/}
                                {/*                     result="effect_dropShadow_1"></feBlend>*/}
                                {/*            <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow_1"*/}
                                {/*                     result="shape"></feBlend>*/}
                                {/*        </filter>*/}
                                {/*        <linearGradient x1="38.299988" y1="17.799988" x2="38.299988" y2="58.566311"*/}
                                {/*                        id="paint_linear_1_524_0" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#69D3FF"></stop>*/}
                                {/*            <stop offset="1" stop-color="#00A4E8"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*        <linearGradient x1="38.823067" y1="17.799988" x2="38.823067" y2="57.977203"*/}
                                {/*                        id="paint_linear_1_524_1" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#FFB500"></stop>*/}
                                {/*            <stop offset="1" stop-color="#F3BA2F"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*        <linearGradient x1="38.299984" y1="58.566311" x2="38.299984" y2="17.799988"*/}
                                {/*                        id="paint_linear_1_524_2" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#FF60D7"></stop>*/}
                                {/*            <stop offset="1" stop-color="#E100A8"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*    </defs>*/}
                                {/*    <g filter="url(#filter_1_523_dd)">*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="#D9D9D9" fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_0)"*/}
                                {/*              fill-opacity="0"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_1)"*/}
                                {/*              fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="#151517" fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_2)"*/}
                                {/*              fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="18.363342" y="18.363342" rx="19.819807"*/}
                                {/*              width="39.873291" height="39.639614" stroke="#050505" stroke-opacity="0"*/}
                                {/*              stroke-width="1.126708"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="18.363342" y="18.363342" rx="19.819807"*/}
                                {/*              width="39.873291" height="39.639614" stroke="#FF72DB" stroke-opacity="0.5"*/}
                                {/*              stroke-width="1.126708"></rect>*/}
                                {/*        <path id="?"*/}
                                {/*              d="M36.02 42.21L39.02 42.21C39.02 41.7 39.18 41.2 39.49 40.72C39.81 40.23 40.19 39.78 40.64 39.36C41.09 38.92 41.55 38.48 42 38.03C42.45 37.57 42.83 37.03 43.15 36.38C43.46 35.74 43.62 35.06 43.62 34.34C43.62 32.78 43.05 31.55 41.92 30.66Q41.44 30.28 40.91 30.01Q39.58 29.33 37.9 29.33Q36.33 29.33 35.01 29.91Q34.57 30.1 34.16 30.35Q33.45 30.8 32.92 31.4Q32.23 32.17 31.84 33.2L34.43 34.66Q34.73 33.76 35.34 33.18Q35.51 33.02 35.7 32.88C36.3 32.46 37 32.25 37.82 32.25C38.67 32.25 39.35 32.46 39.86 32.86Q40.13 33.08 40.31 33.36Q40.61 33.85 40.61 34.53C40.61 35.03 40.46 35.53 40.14 36.02Q39.67 36.75 39 37.37C38.54 37.77 38.09 38.2 37.64 38.65C37.18 39.09 36.8 39.62 36.49 40.25C36.17 40.86 36.02 41.51 36.02 42.21ZM38.92 44.92C38.53 44.54 38.07 44.35 37.53 44.35Q37.08 44.35 36.7 44.52Q36.38 44.66 36.12 44.92Q35.87 45.19 35.73 45.51Q35.57 45.87 35.57 46.31C35.57 46.85 35.77 47.31 36.15 47.69C36.53 48.07 36.99 48.26 37.53 48.26Q37.93 48.26 38.28 48.12Q38.63 47.98 38.92 47.69C39.3 47.31 39.49 46.85 39.49 46.31Q39.49 45.91 39.35 45.56Q39.21 45.21 38.92 44.92Z"*/}
                                {/*              fill="#FFFFFF" fill-opacity="1" fill-rule="evenodd"></path>*/}
                                {/*    </g>*/}
                                {/*</svg>*/}
                            </div>
                        </div>
                        <div className="flex flex-col"><p className="text-[13px] font-bold leading-[16px]">Подпишись на
                            канал</p><p className="text-[11px] leading-[11px] opacity-50">+1 Вращение</p></div>
                    </div>
                    <button className="p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-xl">
                        <div
                            className="flex items-center gap-x-1 bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] px-4 h-8 rounded-xl">
                            <p className="font-bold text-xs leading-[110%] tracking-[-2%] whitespace-nowrap">Перейти</p>
                        </div>
                    </button>
                </div>
                <div
                    className="relative border-[0.68px] border-[#202023] rounded-[16.34px] h-[55px] flex items-center justify-between px-4">
                    <div className="flex items-center gap-x-3">
                        <div className="relative w-12 h-12">
                            <div className="absolute -top-4 -left-4 ">
                                {/*<svg width="76.599976" height="76.366302" viewBox="0 0 76.6 76.3663" fill="none"*/}
                                {/*     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                {/*    <desc>*/}
                                {/*        Created with Pixso.*/}
                                {/*    </desc>*/}
                                {/*    <defs>*/}
                                {/*        <filter id="filter_1_523_dd" x="0" y="0" width="76.599976" height="76.366302"*/}
                                {/*                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">*/}
                                {/*            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>*/}
                                {/*            <feColorMatrix in="SourceAlpha" type="matrix"*/}
                                {/*                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"*/}
                                {/*                           result="hardAlpha"></feColorMatrix>*/}
                                {/*            <feOffset dx="0" dy="0"></feOffset>*/}
                                {/*            <feGaussianBlur stdDeviation="5.93333"></feGaussianBlur>*/}
                                {/*            <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1"></feComposite>*/}
                                {/*            <feColorMatrix type="matrix"*/}
                                {/*                           values="0 0 0 0 0.88235 0 0 0 0 0 0 0 0 0 0.65882 0 0 0 0.25 0"></feColorMatrix>*/}
                                {/*            <feBlend mode="normal" in2="BackgroundImageFix"*/}
                                {/*                     result="effect_dropShadow_1"></feBlend>*/}
                                {/*            <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow_1"*/}
                                {/*                     result="shape"></feBlend>*/}
                                {/*        </filter>*/}
                                {/*        <linearGradient x1="38.299988" y1="17.799988" x2="38.299988" y2="58.566311"*/}
                                {/*                        id="paint_linear_1_524_0" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#69D3FF"></stop>*/}
                                {/*            <stop offset="1" stop-color="#00A4E8"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*        <linearGradient x1="38.823067" y1="17.799988" x2="38.823067" y2="57.977203"*/}
                                {/*                        id="paint_linear_1_524_1" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#FFB500"></stop>*/}
                                {/*            <stop offset="1" stop-color="#F3BA2F"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*        <linearGradient x1="38.299984" y1="58.566311" x2="38.299984" y2="17.799988"*/}
                                {/*                        id="paint_linear_1_524_2" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#FF60D7"></stop>*/}
                                {/*            <stop offset="1" stop-color="#E100A8"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*    </defs>*/}
                                {/*    <g filter="url(#filter_1_523_dd)">*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="#D9D9D9" fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_0)"*/}
                                {/*              fill-opacity="0"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_1)"*/}
                                {/*              fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="#151517" fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_2)"*/}
                                {/*              fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="18.363342" y="18.363342" rx="19.819807"*/}
                                {/*              width="39.873291" height="39.639614" stroke="#050505" stroke-opacity="0"*/}
                                {/*              stroke-width="1.126708"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="18.363342" y="18.363342" rx="19.819807"*/}
                                {/*              width="39.873291" height="39.639614" stroke="#FF72DB" stroke-opacity="0.5"*/}
                                {/*              stroke-width="1.126708"></rect>*/}
                                {/*        <path id="?"*/}
                                {/*              d="M36.02 42.21L39.02 42.21C39.02 41.7 39.18 41.2 39.49 40.72C39.81 40.23 40.19 39.78 40.64 39.36C41.09 38.92 41.55 38.48 42 38.03C42.45 37.57 42.83 37.03 43.15 36.38C43.46 35.74 43.62 35.06 43.62 34.34C43.62 32.78 43.05 31.55 41.92 30.66Q41.44 30.28 40.91 30.01Q39.58 29.33 37.9 29.33Q36.33 29.33 35.01 29.91Q34.57 30.1 34.16 30.35Q33.45 30.8 32.92 31.4Q32.23 32.17 31.84 33.2L34.43 34.66Q34.73 33.76 35.34 33.18Q35.51 33.02 35.7 32.88C36.3 32.46 37 32.25 37.82 32.25C38.67 32.25 39.35 32.46 39.86 32.86Q40.13 33.08 40.31 33.36Q40.61 33.85 40.61 34.53C40.61 35.03 40.46 35.53 40.14 36.02Q39.67 36.75 39 37.37C38.54 37.77 38.09 38.2 37.64 38.65C37.18 39.09 36.8 39.62 36.49 40.25C36.17 40.86 36.02 41.51 36.02 42.21ZM38.92 44.92C38.53 44.54 38.07 44.35 37.53 44.35Q37.08 44.35 36.7 44.52Q36.38 44.66 36.12 44.92Q35.87 45.19 35.73 45.51Q35.57 45.87 35.57 46.31C35.57 46.85 35.77 47.31 36.15 47.69C36.53 48.07 36.99 48.26 37.53 48.26Q37.93 48.26 38.28 48.12Q38.63 47.98 38.92 47.69C39.3 47.31 39.49 46.85 39.49 46.31Q39.49 45.91 39.35 45.56Q39.21 45.21 38.92 44.92Z"*/}
                                {/*              fill="#FFFFFF" fill-opacity="1" fill-rule="evenodd"></path>*/}
                                {/*    </g>*/}
                                {/*</svg>*/}
                            </div>
                        </div>
                        <div className="flex flex-col"><p className="text-[13px] font-bold leading-[16px]">Подпишись на
                            канал</p><p className="text-[11px] leading-[11px] opacity-50">+1 Вращение</p></div>
                    </div>
                    <button className="p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-xl">
                        <div
                            className="flex items-center gap-x-1 bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] px-4 h-8 rounded-xl">
                            <p className="font-bold text-xs leading-[110%] tracking-[-2%] whitespace-nowrap">Перейти</p>
                        </div>
                    </button>
                </div>
                <div
                    className="relative border-[0.68px] border-[#202023] rounded-[16.34px] h-[55px] flex items-center justify-between px-4">
                    <div className="flex items-center gap-x-3">
                        <div className="relative w-12 h-12">
                            <div className="absolute -top-4 -left-4 ">
                                {/*<svg width="76.599976" height="76.366302" viewBox="0 0 76.6 76.3663" fill="none"*/}
                                {/*     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                                {/*    <desc>*/}
                                {/*        Created with Pixso.*/}
                                {/*    </desc>*/}
                                {/*    <defs>*/}
                                {/*        <filter id="filter_1_523_dd" x="0" y="0" width="76.599976" height="76.366302"*/}
                                {/*                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">*/}
                                {/*            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>*/}
                                {/*            <feColorMatrix in="SourceAlpha" type="matrix"*/}
                                {/*                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"*/}
                                {/*                           result="hardAlpha"></feColorMatrix>*/}
                                {/*            <feOffset dx="0" dy="0"></feOffset>*/}
                                {/*            <feGaussianBlur stdDeviation="5.93333"></feGaussianBlur>*/}
                                {/*            <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1"></feComposite>*/}
                                {/*            <feColorMatrix type="matrix"*/}
                                {/*                           values="0 0 0 0 0.88235 0 0 0 0 0 0 0 0 0 0.65882 0 0 0 0.25 0"></feColorMatrix>*/}
                                {/*            <feBlend mode="normal" in2="BackgroundImageFix"*/}
                                {/*                     result="effect_dropShadow_1"></feBlend>*/}
                                {/*            <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow_1"*/}
                                {/*                     result="shape"></feBlend>*/}
                                {/*        </filter>*/}
                                {/*        <linearGradient x1="38.299988" y1="17.799988" x2="38.299988" y2="58.566311"*/}
                                {/*                        id="paint_linear_1_524_0" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#69D3FF"></stop>*/}
                                {/*            <stop offset="1" stop-color="#00A4E8"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*        <linearGradient x1="38.823067" y1="17.799988" x2="38.823067" y2="57.977203"*/}
                                {/*                        id="paint_linear_1_524_1" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#FFB500"></stop>*/}
                                {/*            <stop offset="1" stop-color="#F3BA2F"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*        <linearGradient x1="38.299984" y1="58.566311" x2="38.299984" y2="17.799988"*/}
                                {/*                        id="paint_linear_1_524_2" gradientUnits="userSpaceOnUse">*/}
                                {/*            <stop stop-color="#FF60D7"></stop>*/}
                                {/*            <stop offset="1" stop-color="#E100A8"></stop>*/}
                                {/*        </linearGradient>*/}
                                {/*    </defs>*/}
                                {/*    <g filter="url(#filter_1_523_dd)">*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="#D9D9D9" fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_0)"*/}
                                {/*              fill-opacity="0"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_1)"*/}
                                {/*              fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="#151517" fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="17.799988" y="17.799988" rx="20.383162"*/}
                                {/*              width="41" height="40.766323" fill="url(#paint_linear_1_524_2)"*/}
                                {/*              fill-opacity="1"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="18.363342" y="18.363342" rx="19.819807"*/}
                                {/*              width="39.873291" height="39.639614" stroke="#050505" stroke-opacity="0"*/}
                                {/*              stroke-width="1.126708"></rect>*/}
                                {/*        <rect id="Rectangle 34625118" x="18.363342" y="18.363342" rx="19.819807"*/}
                                {/*              width="39.873291" height="39.639614" stroke="#FF72DB" stroke-opacity="0.5"*/}
                                {/*              stroke-width="1.126708"></rect>*/}
                                {/*        <path id="?"*/}
                                {/*              d="M36.02 42.21L39.02 42.21C39.02 41.7 39.18 41.2 39.49 40.72C39.81 40.23 40.19 39.78 40.64 39.36C41.09 38.92 41.55 38.48 42 38.03C42.45 37.57 42.83 37.03 43.15 36.38C43.46 35.74 43.62 35.06 43.62 34.34C43.62 32.78 43.05 31.55 41.92 30.66Q41.44 30.28 40.91 30.01Q39.58 29.33 37.9 29.33Q36.33 29.33 35.01 29.91Q34.57 30.1 34.16 30.35Q33.45 30.8 32.92 31.4Q32.23 32.17 31.84 33.2L34.43 34.66Q34.73 33.76 35.34 33.18Q35.51 33.02 35.7 32.88C36.3 32.46 37 32.25 37.82 32.25C38.67 32.25 39.35 32.46 39.86 32.86Q40.13 33.08 40.31 33.36Q40.61 33.85 40.61 34.53C40.61 35.03 40.46 35.53 40.14 36.02Q39.67 36.75 39 37.37C38.54 37.77 38.09 38.2 37.64 38.65C37.18 39.09 36.8 39.62 36.49 40.25C36.17 40.86 36.02 41.51 36.02 42.21ZM38.92 44.92C38.53 44.54 38.07 44.35 37.53 44.35Q37.08 44.35 36.7 44.52Q36.38 44.66 36.12 44.92Q35.87 45.19 35.73 45.51Q35.57 45.87 35.57 46.31C35.57 46.85 35.77 47.31 36.15 47.69C36.53 48.07 36.99 48.26 37.53 48.26Q37.93 48.26 38.28 48.12Q38.63 47.98 38.92 47.69C39.3 47.31 39.49 46.85 39.49 46.31Q39.49 45.91 39.35 45.56Q39.21 45.21 38.92 44.92Z"*/}
                                {/*              fill="#FFFFFF" fill-opacity="1" fill-rule="evenodd"></path>*/}
                                {/*    </g>*/}
                                {/*</svg>*/}
                            </div>
                        </div>
                        <div className="flex flex-col"><p className="text-[13px] font-bold leading-[16px]">Подпишись на
                            канал</p><p className="text-[11px] leading-[11px] opacity-50">+1 Вращение</p></div>
                    </div>
                    <button className="p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-xl">
                        <div
                            className="flex items-center gap-x-1 bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] px-4 h-8 rounded-xl">
                            <p className="font-bold text-xs leading-[110%] tracking-[-2%] whitespace-nowrap">Перейти</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>

    </PageLayout>

})

export default Tasks
