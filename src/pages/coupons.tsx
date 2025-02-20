import PageLayout from "@/layout/page-layout";
import tgHelper from "@/libs/tg-helper";
import {useRootStore} from "@/providers/RootStoreProvider";
import ButtonUi from "@/ui/button-ui";
import {observer} from "mobx-react-lite";
import Image from "next/image";
import React from "react";

const Coupons = observer(() => {

    const {dataStore} = useRootStore()

    const getActiveKeyHandler = () => {
        if (dataStore.data.my_coupons_link) {
            tgHelper.openLink(dataStore.data.my_coupons_link)
        }
    }

    return (
        <PageLayout>
            <div className="relative z-10 flex flex-col px-4 w-full">
                <div className="flex items-center gap-2">
                    <Image
                        src="/img/referralavatar-WsEBLjWG.png"
                        height={29}
                        width={29}
                        alt="Referral Avatar"
                        style={{transform: "scale(1.8)"}}
                    />
                    <p className="text-[17.39px] font-bold leading-[110%] tracking-[-2%]">V</p>
                </div>
                <p className="text-[10.71px] leading-[110%] tracking-[-2%] opacity-50 mt-1">Всего купонов</p>
                <div className="relative flex gap-2">
                    <p className="text-[32.14px] font-bold leading-[110%] tracking-[-2%]">0</p>
                    <Image src="/icon/roulette-accent.svg" alt="icon" width={24} height={24}/>
                </div>
                <div className="w-full mt-3">
                    <ButtonUi size={"big"} onClick={getActiveKeyHandler}>
                        Получить код активации
                    </ButtonUi>
                </div>
            </div>

            <div className="border-t border-[#202023] mt-4  rounded-t-3xl flex flex-col"><p
                className="text-[20px] font-bold leading-[24px] px-4 mt-3">Купоны</p>
                <div className="flex items-center justify-center relative">
                    <svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="text-gray-800">
                        <g filter="url(#filter0_b_1_244)">
                            <circle cx="64.5" cy="64.5" r="39.5" fill="#FB48FF" fill-opacity="0.1"></circle>
                            <circle cx="64.5" cy="64.5" r="39" stroke="url(#paint0_linear_1_244)"
                                    stroke-opacity="0.3"></circle>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M46.379 53.3783C46.016 53.7413 46.0159 53.7717 46.0008 57.0363L46.0007 57.0401V60.3388C47.2718 60.7928 47.877 61.2013 48.3159 61.6099C48.7395 62.0184 49.1481 62.5934 49.2994 62.9868C49.4356 63.3651 49.5567 64.0461 49.5567 64.5C49.5567 64.9539 49.4356 65.6349 49.2994 66.0132C49.1481 66.4066 48.7395 66.9816 48.3159 67.3901C47.877 67.7987 47.2718 68.2072 46.7876 68.3737L46.0007 68.6612V75.2434L46.7573 76H56.5928C56.5928 73.1704 56.6382 72.9283 56.8955 72.6711C57.0619 72.5046 57.3343 72.3684 57.5007 72.3684C57.6672 72.3684 57.9395 72.5046 58.106 72.6711C58.3632 72.9283 58.4086 73.1704 58.4086 74.4868V76H81.5751C81.7745 75.7965 81.9203 75.6478 82.0268 75.4748C82.3165 75.0048 82.3165 74.3563 82.3165 71.9447V68.6612C81.0455 68.2072 80.4402 67.7987 80.0014 67.3901C79.5777 66.9816 79.1692 66.4066 79.0178 66.0132C78.8817 65.6349 78.7606 64.9539 78.7606 64.5C78.7606 64.0461 78.8817 63.3651 79.0178 62.9868C79.1692 62.5934 79.5777 62.0184 80.0014 61.6099C80.4402 61.2013 81.0455 60.7928 81.5297 60.6263L82.3165 60.3388V53.7566L81.5599 53H58.4086C58.4086 55.8296 58.3632 56.0717 58.106 56.3289C57.9395 56.4954 57.6672 56.6316 57.5007 56.6316C57.3343 56.6316 57.0619 56.4954 56.8955 56.3289C56.6382 56.0717 56.5928 55.8296 56.5928 54.5132V53H46.7422L46.379 53.3783ZM63.1187 58.9467C63.3154 58.7651 63.6786 58.5079 63.9358 58.3868C64.1931 58.2506 64.6924 58.1447 65.0707 58.1447C65.449 58.1447 66.024 58.2809 66.3569 58.4322C66.6898 58.5684 67.1437 58.9164 67.3707 59.1737C67.6128 59.446 67.8549 59.9151 67.9457 60.2329C68.0213 60.5355 68.097 60.9592 68.097 61.171C68.097 61.3829 67.9154 61.9125 67.6884 62.3664C67.3858 62.9414 67.0832 63.2894 66.6595 63.5316C66.3266 63.7131 65.8121 63.925 65.5246 63.9704C65.222 64.0309 64.7378 64.0006 64.3898 63.8947C64.0569 63.7888 63.5575 63.5316 63.27 63.3046C62.9825 63.0927 62.6194 62.6388 62.4681 62.3059C62.3167 61.973 62.1957 61.4283 62.1957 61.0954C62.1957 60.7625 62.3319 60.2177 62.4832 59.8848C62.6345 59.5519 62.922 59.1283 63.1187 58.9467ZM68.1878 64.1973C70.0641 61.4131 71.7437 58.9769 71.9253 58.7954C72.0917 58.5987 72.3792 58.4473 72.5457 58.4473C72.7273 58.4473 72.9845 58.5684 73.1358 58.7197C73.2871 58.8559 73.4082 59.1434 73.3931 59.3552C73.3931 59.5973 72.1977 61.5039 70.1246 64.5756C68.324 67.2388 66.6898 69.6447 66.4931 69.9171C66.2509 70.2399 66.0038 70.4013 65.7516 70.4013C65.5398 70.4013 65.2371 70.2651 65.0707 70.0987C64.9042 69.9322 64.7681 69.675 64.7681 69.5388C64.7681 69.3875 66.2963 66.9816 68.1878 64.1973ZM56.824 59.1737C56.5819 59.4158 56.5516 59.6881 56.5667 61.1105C56.5819 62.0184 56.6575 62.8355 56.7181 62.9263C56.7786 63.0171 56.9904 63.1835 57.2023 63.2743C57.52 63.4408 57.6411 63.4256 57.9588 63.1684C58.322 62.896 58.3371 62.7901 58.3825 61.2316C58.3977 59.9605 58.3674 59.5066 58.1858 59.2493C58.0345 59.0223 57.8075 58.9013 57.52 58.9013C57.2931 58.9013 56.9753 59.0223 56.824 59.1737ZM71.3503 65.6197C71.6075 65.4381 72.0463 65.2112 72.3338 65.1204C72.6213 65.0447 73.1207 64.9993 73.4233 65.0296C73.7411 65.075 74.2707 65.2414 74.6036 65.4079C74.9365 65.5743 75.3299 65.8921 75.4812 66.1342C75.6477 66.3612 75.8444 66.7848 75.9503 67.0723C76.0411 67.3598 76.1167 67.8138 76.1167 68.0559C76.1167 68.3131 75.9806 68.7822 75.8292 69.1151C75.6779 69.448 75.3904 69.8717 75.1937 70.0533C74.997 70.2348 74.5733 70.4921 74.2556 70.6131C73.9529 70.7493 73.4233 70.8552 73.0904 70.8552C72.7575 70.8552 72.2279 70.7191 71.9102 70.5677C71.6075 70.4164 71.199 70.1138 71.0174 69.9171C70.8358 69.7355 70.5786 69.3118 70.4575 69.0092C70.3213 68.6914 70.2154 68.177 70.2154 67.8743C70.2154 67.5566 70.3667 66.9967 70.5634 66.6335C70.745 66.2552 71.0931 65.8013 71.3503 65.6197ZM57.1266 65.7559C56.9602 65.8467 56.7786 65.998 56.7181 66.0888C56.6575 66.1644 56.597 66.9967 56.597 67.9046C56.5819 69.3118 56.6273 69.6144 56.8542 69.8263C57.0056 69.9776 57.3082 70.0987 57.5352 70.0987C57.8075 70.0987 58.0345 69.9776 58.1858 69.7658C58.3523 69.5085 58.4128 68.9941 58.4128 67.7987C58.4128 66.1947 58.4128 66.1644 57.9891 65.8618C57.7621 65.6802 57.5503 65.5592 57.5049 65.5592C57.4595 65.5592 57.2931 65.65 57.1266 65.7559Z"
                              fill="#FB48FF"></path>
                        <path
                            d="M63.975 60.9895C63.9599 60.8079 64.1112 60.5052 64.3079 60.3085C64.5046 60.1118 64.8527 59.9605 65.0948 59.9605C65.352 59.9605 65.6698 60.1118 65.8968 60.3388C66.1086 60.5506 66.275 60.823 66.275 60.9441C66.275 61.0651 66.1843 61.3375 66.0935 61.5493C65.9875 61.7612 65.7303 62.0033 65.5185 62.0941C65.2612 62.2 65.004 62.2 64.7316 62.0789C64.4895 62.0033 64.2474 61.7914 64.1566 61.625C64.0658 61.4585 63.9902 61.171 63.975 60.9895Z"
                            fill="#FB48FF"></path>
                        <path
                            d="M72.2066 67.3599C72.3125 67.1934 72.5244 66.9967 72.706 66.921C72.8724 66.8454 73.175 66.8151 73.3869 66.8605C73.5987 66.9059 73.8862 67.0875 74.0375 67.2691C74.1889 67.4506 74.3099 67.7533 74.2948 67.9349C74.2948 68.1316 74.1283 68.4493 73.9165 68.6612C73.6895 68.9033 73.3869 69.0395 73.0843 69.0395C72.7665 69.0395 72.5395 68.9184 72.3277 68.6309C72.1461 68.3888 72.0099 68.0862 72.025 67.95C72.025 67.7987 72.1007 67.5414 72.2066 67.3599Z"
                            fill="#FB48FF"></path>
                        <g opacity="0.75" filter="url(#filter1_f_1_244)" style={{mixBlendMode: "hard-light"}}>
                            <circle cx="64.5" cy="64.5" r="39.5" fill="#FB48FF" fill-opacity="0.1"></circle>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M69.6943 61.0175H60.0544C59.4722 61.0175 58.9997 60.545 58.9997 59.9628C58.9997 59.3806 59.4722 58.9081 60.0544 58.9081H69.6943C70.2765 58.9081 70.749 59.3806 70.749 59.9628C70.749 60.545 70.2765 61.0175 69.6943 61.0175ZM76.0815 65.2672L76.0772 62.3689C76.0772 51.6898 74.4024 49.8125 64.875 49.8125C55.3477 49.8125 53.6729 51.6898 53.6729 62.3689L53.6686 65.2672C53.656 73.1773 53.6504 76.1389 54.8583 77.3469C55.2493 77.7392 55.7682 77.9375 56.3996 77.9375C57.7425 77.9375 59.236 76.662 60.818 75.3106C62.2186 74.1139 63.8063 72.7583 64.875 72.7583C65.9438 72.7583 67.5315 74.1139 68.9321 75.3106C70.5141 76.662 72.0075 77.9375 73.3505 77.9375C73.9819 77.9375 74.5008 77.7392 74.8918 77.3469C76.0997 76.1389 76.0941 73.1773 76.0815 65.2672Z"
                                  fill="#FB48FF"></path>
                        </g>
                        <defs>
                            <filter id="filter0_b_1_244" x="0.1" y="0.1" width="128.8" height="128.8"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.45"></feGaussianBlur>
                                <feComposite in2="SourceAlpha" operator="in"
                                             result="effect1_backgroundBlur_1_244"></feComposite>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_244"
                                         result="shape"></feBlend>
                            </filter>
                            <filter id="filter1_f_1_244" x="0.4" y="0.4" width="128.2" height="128.2"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                         result="shape"></feBlend>
                                <feGaussianBlur stdDeviation="12.3"
                                                result="effect1_foregroundBlur_1_244"></feGaussianBlur>
                            </filter>
                            <linearGradient id="paint0_linear_1_244" x1="64.5" y1="25" x2="64.5" y2="104"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FB48FF"></stop>
                                <stop offset="0.627766" stop-color="#FB48FF" stop-opacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="absolute blur-[10.6px] opacity-75">
                        <g filter="url(#filter0_b_1_244)">
                            <circle cx="64.5" cy="64.5" r="39.5" fill="#FB48FF" fill-opacity="0.1"></circle>
                            <circle cx="64.5" cy="64.5" r="39" stroke="url(#paint0_linear_1_244)"
                                    stroke-opacity="0.3"></circle>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M46.379 53.3783C46.016 53.7413 46.0159 53.7717 46.0008 57.0363L46.0007 57.0401V60.3388C47.2718 60.7928 47.877 61.2013 48.3159 61.6099C48.7395 62.0184 49.1481 62.5934 49.2994 62.9868C49.4356 63.3651 49.5567 64.0461 49.5567 64.5C49.5567 64.9539 49.4356 65.6349 49.2994 66.0132C49.1481 66.4066 48.7395 66.9816 48.3159 67.3901C47.877 67.7987 47.2718 68.2072 46.7876 68.3737L46.0007 68.6612V75.2434L46.7573 76H56.5928C56.5928 73.1704 56.6382 72.9283 56.8955 72.6711C57.0619 72.5046 57.3343 72.3684 57.5007 72.3684C57.6672 72.3684 57.9395 72.5046 58.106 72.6711C58.3632 72.9283 58.4086 73.1704 58.4086 74.4868V76H81.5751C81.7745 75.7965 81.9203 75.6478 82.0268 75.4748C82.3165 75.0048 82.3165 74.3563 82.3165 71.9447V68.6612C81.0455 68.2072 80.4402 67.7987 80.0014 67.3901C79.5777 66.9816 79.1692 66.4066 79.0178 66.0132C78.8817 65.6349 78.7606 64.9539 78.7606 64.5C78.7606 64.0461 78.8817 63.3651 79.0178 62.9868C79.1692 62.5934 79.5777 62.0184 80.0014 61.6099C80.4402 61.2013 81.0455 60.7928 81.5297 60.6263L82.3165 60.3388V53.7566L81.5599 53H58.4086C58.4086 55.8296 58.3632 56.0717 58.106 56.3289C57.9395 56.4954 57.6672 56.6316 57.5007 56.6316C57.3343 56.6316 57.0619 56.4954 56.8955 56.3289C56.6382 56.0717 56.5928 55.8296 56.5928 54.5132V53H46.7422L46.379 53.3783ZM63.1187 58.9467C63.3154 58.7651 63.6786 58.5079 63.9358 58.3868C64.1931 58.2506 64.6924 58.1447 65.0707 58.1447C65.449 58.1447 66.024 58.2809 66.3569 58.4322C66.6898 58.5684 67.1437 58.9164 67.3707 59.1737C67.6128 59.446 67.8549 59.9151 67.9457 60.2329C68.0213 60.5355 68.097 60.9592 68.097 61.171C68.097 61.3829 67.9154 61.9125 67.6884 62.3664C67.3858 62.9414 67.0832 63.2894 66.6595 63.5316C66.3266 63.7131 65.8121 63.925 65.5246 63.9704C65.222 64.0309 64.7378 64.0006 64.3898 63.8947C64.0569 63.7888 63.5575 63.5316 63.27 63.3046C62.9825 63.0927 62.6194 62.6388 62.4681 62.3059C62.3167 61.973 62.1957 61.4283 62.1957 61.0954C62.1957 60.7625 62.3319 60.2177 62.4832 59.8848C62.6345 59.5519 62.922 59.1283 63.1187 58.9467ZM68.1878 64.1973C70.0641 61.4131 71.7437 58.9769 71.9253 58.7954C72.0917 58.5987 72.3792 58.4473 72.5457 58.4473C72.7273 58.4473 72.9845 58.5684 73.1358 58.7197C73.2871 58.8559 73.4082 59.1434 73.3931 59.3552C73.3931 59.5973 72.1977 61.5039 70.1246 64.5756C68.324 67.2388 66.6898 69.6447 66.4931 69.9171C66.2509 70.2399 66.0038 70.4013 65.7516 70.4013C65.5398 70.4013 65.2371 70.2651 65.0707 70.0987C64.9042 69.9322 64.7681 69.675 64.7681 69.5388C64.7681 69.3875 66.2963 66.9816 68.1878 64.1973ZM56.824 59.1737C56.5819 59.4158 56.5516 59.6881 56.5667 61.1105C56.5819 62.0184 56.6575 62.8355 56.7181 62.9263C56.7786 63.0171 56.9904 63.1835 57.2023 63.2743C57.52 63.4408 57.6411 63.4256 57.9588 63.1684C58.322 62.896 58.3371 62.7901 58.3825 61.2316C58.3977 59.9605 58.3674 59.5066 58.1858 59.2493C58.0345 59.0223 57.8075 58.9013 57.52 58.9013C57.2931 58.9013 56.9753 59.0223 56.824 59.1737ZM71.3503 65.6197C71.6075 65.4381 72.0463 65.2112 72.3338 65.1204C72.6213 65.0447 73.1207 64.9993 73.4233 65.0296C73.7411 65.075 74.2707 65.2414 74.6036 65.4079C74.9365 65.5743 75.3299 65.8921 75.4812 66.1342C75.6477 66.3612 75.8444 66.7848 75.9503 67.0723C76.0411 67.3598 76.1167 67.8138 76.1167 68.0559C76.1167 68.3131 75.9806 68.7822 75.8292 69.1151C75.6779 69.448 75.3904 69.8717 75.1937 70.0533C74.997 70.2348 74.5733 70.4921 74.2556 70.6131C73.9529 70.7493 73.4233 70.8552 73.0904 70.8552C72.7575 70.8552 72.2279 70.7191 71.9102 70.5677C71.6075 70.4164 71.199 70.1138 71.0174 69.9171C70.8358 69.7355 70.5786 69.3118 70.4575 69.0092C70.3213 68.6914 70.2154 68.177 70.2154 67.8743C70.2154 67.5566 70.3667 66.9967 70.5634 66.6335C70.745 66.2552 71.0931 65.8013 71.3503 65.6197ZM57.1266 65.7559C56.9602 65.8467 56.7786 65.998 56.7181 66.0888C56.6575 66.1644 56.597 66.9967 56.597 67.9046C56.5819 69.3118 56.6273 69.6144 56.8542 69.8263C57.0056 69.9776 57.3082 70.0987 57.5352 70.0987C57.8075 70.0987 58.0345 69.9776 58.1858 69.7658C58.3523 69.5085 58.4128 68.9941 58.4128 67.7987C58.4128 66.1947 58.4128 66.1644 57.9891 65.8618C57.7621 65.6802 57.5503 65.5592 57.5049 65.5592C57.4595 65.5592 57.2931 65.65 57.1266 65.7559Z"
                              fill="#FB48FF"></path>
                        <path
                            d="M63.975 60.9895C63.9599 60.8079 64.1112 60.5052 64.3079 60.3085C64.5046 60.1118 64.8527 59.9605 65.0948 59.9605C65.352 59.9605 65.6698 60.1118 65.8968 60.3388C66.1086 60.5506 66.275 60.823 66.275 60.9441C66.275 61.0651 66.1843 61.3375 66.0935 61.5493C65.9875 61.7612 65.7303 62.0033 65.5185 62.0941C65.2612 62.2 65.004 62.2 64.7316 62.0789C64.4895 62.0033 64.2474 61.7914 64.1566 61.625C64.0658 61.4585 63.9902 61.171 63.975 60.9895Z"
                            fill="#FB48FF"></path>
                        <path
                            d="M72.2066 67.3599C72.3125 67.1934 72.5244 66.9967 72.706 66.921C72.8724 66.8454 73.175 66.8151 73.3869 66.8605C73.5987 66.9059 73.8862 67.0875 74.0375 67.2691C74.1889 67.4506 74.3099 67.7533 74.2948 67.9349C74.2948 68.1316 74.1283 68.4493 73.9165 68.6612C73.6895 68.9033 73.3869 69.0395 73.0843 69.0395C72.7665 69.0395 72.5395 68.9184 72.3277 68.6309C72.1461 68.3888 72.0099 68.0862 72.025 67.95C72.025 67.7987 72.1007 67.5414 72.2066 67.3599Z"
                            fill="#FB48FF"></path>
                        <g opacity="0.75" filter="url(#filter1_f_1_244)" style={{mixBlendMode: "hard-light"}}>
                            <circle cx="64.5" cy="64.5" r="39.5" fill="#FB48FF" fill-opacity="0.1"></circle>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M69.6943 61.0175H60.0544C59.4722 61.0175 58.9997 60.545 58.9997 59.9628C58.9997 59.3806 59.4722 58.9081 60.0544 58.9081H69.6943C70.2765 58.9081 70.749 59.3806 70.749 59.9628C70.749 60.545 70.2765 61.0175 69.6943 61.0175ZM76.0815 65.2672L76.0772 62.3689C76.0772 51.6898 74.4024 49.8125 64.875 49.8125C55.3477 49.8125 53.6729 51.6898 53.6729 62.3689L53.6686 65.2672C53.656 73.1773 53.6504 76.1389 54.8583 77.3469C55.2493 77.7392 55.7682 77.9375 56.3996 77.9375C57.7425 77.9375 59.236 76.662 60.818 75.3106C62.2186 74.1139 63.8063 72.7583 64.875 72.7583C65.9438 72.7583 67.5315 74.1139 68.9321 75.3106C70.5141 76.662 72.0075 77.9375 73.3505 77.9375C73.9819 77.9375 74.5008 77.7392 74.8918 77.3469C76.0997 76.1389 76.0941 73.1773 76.0815 65.2672Z"
                                  fill="#FB48FF"></path>
                        </g>
                        <defs>
                            <filter id="filter0_b_1_244" x="0.1" y="0.1" width="128.8" height="128.8"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.45"></feGaussianBlur>
                                <feComposite in2="SourceAlpha" operator="in"
                                             result="effect1_backgroundBlur_1_244"></feComposite>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_244"
                                         result="shape"></feBlend>
                            </filter>
                            <filter id="filter1_f_1_244" x="0.4" y="0.4" width="128.2" height="128.2"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                         result="shape"></feBlend>
                                <feGaussianBlur stdDeviation="12.3"
                                                result="effect1_foregroundBlur_1_244"></feGaussianBlur>
                            </filter>
                            <linearGradient id="paint0_linear_1_244" x1="64.5" y1="25" x2="64.5" y2="104"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FB48FF"></stop>
                                <stop offset="0.627766" stop-color="#FB48FF" stop-opacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-center mt-2 gap-y-2"><p
                    className="text-[25px] font-bold leading-[30px]">Пока пусто</p><p
                    className="text-[13px] leading-[16px] text-center opacity-10">Здесь будет отображаться история
                    ваших <br/>заявок на вывод и статусы</p></div>
            </div>
        </PageLayout>
    );
})

export default Coupons;
