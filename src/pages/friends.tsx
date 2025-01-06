import PageLayout from "@/layout/page-layout";

const Friends = () => {

    return <PageLayout>
        <div className="relative z-10 flex flex-col items-center text-center"><p
            className="text-[32.14px] font-bold leading-[110%] tracking-[-2%]">Приглашай и вращай</p><p
            className="text-[10.71px] leading-[110%] tracking-[-2%] opacity-50 mt-1">За каждого друга вы получаете 1
            вращение</p>
            <button className="p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-[12.17px] mt-3">
                <div
                    className="flex items-center gap-x-1 bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] w-[202px] justify-center h-[44px] rounded-[12px]">
                    <p className="font-bold text-[17px] leading-[110%] tracking-[-2%]">Пригласить друга</p></div>
            </button>
        </div>

        <div className="flex flex-col border border-[#202023] rounded-[15px] mt-7 px-4 py-3 gap-y-1">
            <p className="text-[19.2px] font-bold leading-[23px]">Скопировать вашу ссылку</p>
            <div className="flex gap-x-2 items-center">
                <div className="w-[1px] h-[16px] rounded-[10px] bg-[#E100A8] shadow-[0px_0px_10px_#E100A8]"></div>
                <p className="text-[13.7px] leading-[17px] text-[#F74DCC] truncate">
                    https://t.me/Ruletkawinbot?start=ref_375462975
                </p>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="text-[#F74DCC] cursor-pointer">
                    <rect rx="1.38" width="9.69" height="9.69" fill="currentColor"></rect>
                    <rect x="2.77" y="2.77" rx="1.38" width="8.77" height="8.77" stroke="currentColor"
                          stroke-width="0.92"></rect>
                </svg>
            </div>
        </div>


        <div className="flex flex-col border border-[#202023] rounded-[24px] mt-7 py-2 px-4 gap-y-[2px] h-[154px]"><p
            className="text-[20px] font-bold leading-24px]">Статистика</p>
            <div className="flex justify-center gap-x-2">
                <div className="relative w-full">
                    <div className="border border-[#202023] rounded-2xl w-full h-[90px] relative overflow-hidden">
                        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2">
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <g opacity="0.1">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.3973 9.94631C12.3019 9.94631 11.2647 10.1693 10.3922 10.5376C13.4554 11.4294 15.6171 13.5523 15.6656 16.0242C17.2553 15.8109 18.9614 15.2196 18.9614 13.5717C18.9614 11.6039 16.412 9.94631 13.3973 9.94631Z"
                                          fill="url(#paint0_linear_1_131)"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M13.3682 8.55045H13.3973C15.462 8.55045 17.139 6.87346 17.139 4.80872C17.139 2.74398 15.462 1.06698 13.3973 1.06698C12.9902 1.06698 12.6024 1.13484 12.2341 1.25116C12.9029 2.23991 13.2907 3.43223 13.2907 4.71178C13.2907 6.0592 12.8545 7.30967 12.1177 8.3275C12.5055 8.47291 12.932 8.55045 13.3682 8.55045Z"
                                          fill="url(#paint1_linear_1_131)"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M7.12413 11.5353C3.28352 11.5353 0.0390625 13.634 0.0390625 16.1184C0.0390625 18.9674 4.08227 19.297 7.12413 19.297C8.87673 19.297 14.2092 19.297 14.2092 16.0991C14.2092 13.6252 10.9647 11.5353 7.12413 11.5353Z"
                                          fill="url(#paint2_linear_1_131)"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M7.09382 9.43092H7.1229C9.7237 9.43092 11.8388 7.31577 11.8388 4.71594C11.8388 2.11515 9.7237 0 7.1229 0C4.52404 0 2.4089 2.11515 2.4089 4.714C2.40405 5.96933 2.88776 7.15098 3.77279 8.04182C4.65782 8.93266 5.83656 9.42607 7.09382 9.43092Z"
                                          fill="url(#paint3_linear_1_131)"></path>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_1_131" x1="9.50023" y1="0" x2="9.50023"
                                                    y2="19.297" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"></stop>
                                        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_131" x1="9.50023" y1="0" x2="9.50023"
                                                    y2="19.297" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"></stop>
                                        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1_131" x1="9.50023" y1="0" x2="9.50023"
                                                    y2="19.297" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"></stop>
                                        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_1_131" x1="9.50023" y1="0" x2="9.50023"
                                                    y2="19.297" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white"></stop>
                                        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <p className="absolute top-[25%] left-1/2 -translate-x-1/2 text-3xl leading-9 font-bold">0</p><p
                        className="absolute bottom-2 w-full text-sm font-bold leading-4 text-center">Всего друзей</p>
                        <div
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[104px] h-3 rounded-xl bg-[#FC8DFF] opacity-100 blur-2xl -mb-4"></div>
                    </div>
                </div>
                <div className="relative w-full">
                    <div className="border border-[#202023] rounded-2xl w-full h-[90px] relative overflow-hidden">
                        <p className="absolute top-[25%] left-1/2 -translate-x-1/2 text-3xl leading-9 font-bold">0</p><p
                        className="absolute bottom-2 w-full text-sm font-bold leading-4 text-center">Вращения</p>
                        <div
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[104px] h-3 rounded-xl bg-[#FC8DFF] opacity-100 blur-2xl -mb-4"></div>
                    </div>
                </div>
            </div>
        </div>


        <div className="border-t border-[#202023] mt-4 rounded-t-3xl flex flex-col"><p
            className="text-[20px] font-bold leading-[24px] ml-4 mt-3">Друзья</p>
            <div className="flex items-center justify-center relative">
                <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_1_92)">
                        <circle cx="39.5" cy="39.5" r="39.5" fill="#FB48FF" fill-opacity="0.1"></circle>
                        <circle cx="39.5" cy="39.5" r="39" stroke="url(#paint0_linear_1_92)"
                                stroke-opacity="0.3"></circle>
                    </g>
                    <g filter="url(#filter1_b_1_92)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M46.1841 40.0108C44.3051 40.0108 42.5259 40.3932 41.0294 41.0251C46.2839 42.5549 49.9919 46.1964 50.0751 50.4365C52.8021 50.0707 55.7286 49.0564 55.7286 46.2297C55.7286 42.8542 51.3554 40.0108 46.1841 40.0108Z"
                              fill="#FB48FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M46.1343 37.6164H46.1842C49.7259 37.6164 52.6026 34.7397 52.6026 31.198C52.6026 27.6562 49.7259 24.7796 46.1842 24.7796C45.4858 24.7796 44.8207 24.896 44.1888 25.0955C45.3361 26.7916 46.0013 28.8368 46.0013 31.0317C46.0013 33.343 45.253 35.488 43.9893 37.2339C44.6544 37.4834 45.386 37.6164 46.1343 37.6164Z"
                              fill="#FB48FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M35.4234 42.7365C28.8354 42.7365 23.27 46.3364 23.27 50.5982C23.27 55.4852 30.2056 56.0505 35.4234 56.0505C38.4298 56.0505 47.5768 56.0505 47.5768 50.5649C47.5768 46.3215 42.0114 42.7365 35.4234 42.7365Z"
                              fill="#FB48FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M35.3714 39.1267H35.4213C39.8826 39.1267 43.5109 35.4985 43.5109 31.0388C43.5109 26.5775 39.8826 22.9493 35.4213 22.9493C30.9634 22.9493 27.3351 26.5775 27.3351 31.0355C27.3268 33.1888 28.1566 35.2158 29.6747 36.7439C31.1928 38.272 33.2148 39.1184 35.3714 39.1267Z"
                              fill="#FB48FF"></path>
                    </g>
                    <defs>
                        <filter id="filter0_b_1_92" x="-24.9" y="-24.9" width="128.8" height="128.8"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.45"></feGaussianBlur>
                            <feComposite in2="SourceAlpha" operator="in"
                                         result="effect1_backgroundBlur_1_92"></feComposite>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_92"
                                     result="shape"></feBlend>
                        </filter>
                        <filter id="filter1_b_1_92" x="-51.3107" y="-51.3093" width="181.619" height="181.619"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="35.4278"></feGaussianBlur>
                            <feComposite in2="SourceAlpha" operator="in"
                                         result="effect1_backgroundBlur_1_92"></feComposite>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_92"
                                     result="shape"></feBlend>
                        </filter>
                        <linearGradient id="paint0_linear_1_92" x1="39.5" y1="0" x2="39.5" y2="79"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FB48FF"></stop>
                            <stop offset="0.627766" stop-color="#FB48FF" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="absolute blur-[24.6px] opacity-75">
                    <g filter="url(#filter0_b_1_92)">
                        <circle cx="39.5" cy="39.5" r="39.5" fill="#FB48FF" fill-opacity="0.1"></circle>
                        <circle cx="39.5" cy="39.5" r="39" stroke="url(#paint0_linear_1_92)"
                                stroke-opacity="0.3"></circle>
                    </g>
                    <g filter="url(#filter1_b_1_92)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M46.1841 40.0108C44.3051 40.0108 42.5259 40.3932 41.0294 41.0251C46.2839 42.5549 49.9919 46.1964 50.0751 50.4365C52.8021 50.0707 55.7286 49.0564 55.7286 46.2297C55.7286 42.8542 51.3554 40.0108 46.1841 40.0108Z"
                              fill="#FB48FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M46.1343 37.6164H46.1842C49.7259 37.6164 52.6026 34.7397 52.6026 31.198C52.6026 27.6562 49.7259 24.7796 46.1842 24.7796C45.4858 24.7796 44.8207 24.896 44.1888 25.0955C45.3361 26.7916 46.0013 28.8368 46.0013 31.0317C46.0013 33.343 45.253 35.488 43.9893 37.2339C44.6544 37.4834 45.386 37.6164 46.1343 37.6164Z"
                              fill="#FB48FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M35.4234 42.7365C28.8354 42.7365 23.27 46.3364 23.27 50.5982C23.27 55.4852 30.2056 56.0505 35.4234 56.0505C38.4298 56.0505 47.5768 56.0505 47.5768 50.5649C47.5768 46.3215 42.0114 42.7365 35.4234 42.7365Z"
                              fill="#FB48FF"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M35.3714 39.1267H35.4213C39.8826 39.1267 43.5109 35.4985 43.5109 31.0388C43.5109 26.5775 39.8826 22.9493 35.4213 22.9493C30.9634 22.9493 27.3351 26.5775 27.3351 31.0355C27.3268 33.1888 28.1566 35.2158 29.6747 36.7439C31.1928 38.272 33.2148 39.1184 35.3714 39.1267Z"
                              fill="#FB48FF"></path>
                    </g>
                    <defs>
                        <filter id="filter0_b_1_92" x="-24.9" y="-24.9" width="128.8" height="128.8"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.45"></feGaussianBlur>
                            <feComposite in2="SourceAlpha" operator="in"
                                         result="effect1_backgroundBlur_1_92"></feComposite>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_92"
                                     result="shape"></feBlend>
                        </filter>
                        <filter id="filter1_b_1_92" x="-51.3107" y="-51.3093" width="181.619" height="181.619"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="35.4278"></feGaussianBlur>
                            <feComposite in2="SourceAlpha" operator="in"
                                         result="effect1_backgroundBlur_1_92"></feComposite>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_92"
                                     result="shape"></feBlend>
                        </filter>
                        <linearGradient id="paint0_linear_1_92" x1="39.5" y1="0" x2="39.5" y2="79"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FB48FF"></stop>
                            <stop offset="0.627766" stop-color="#FB48FF" stop-opacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="flex flex-col items-center justify-center mt-2 gap-y-2"><p
                className="text-[25px] font-bold leading-[30px]">Пока пусто</p><p
                className="text-[13px] leading-[16px] text-center opacity-10">Здесь будет список друзей,
                которых <br/> вы пригласили</p></div>
        </div>

    </PageLayout>

}

export default Friends
