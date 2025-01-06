const MainInfo = () => {
    return (
        <div className="px-4 mb-[75px] space-y-[6px] flex-shrink-0">
            <div
                className="rounded-xl border-t border-[#5A3754] backdrop-blur-[0px] bg-[#4E4E4E]/15 max-[360px]:py-3 py-4 flex justify-center items-center gap-x-2">
                <svg
                    width="23"
                    height="22.991455"
                    viewBox="0 0 23 22.9915"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[42.59px] h-[42.58px] max-[360px]:w-[38px] max-[360px]:h-[38px] text-[#FF27CC]"
                >
                    <path d="M11.4 0C12.16 ... (ваш SVG-путь) ..." fill="currentColor"/>
                </svg>
                <div className="text-white text-lg font-semibold">0 Вращений</div>
            </div>
            <div className={"flex gap-2"}>
                <div className="rounded-xl bg-[#4E4E4E]/15 py-4 flex flex-col justify-center items-center w-full">
                    <div className="text-white text-base text-[13px]">3 вращения</div>
                    <div
                        className="flex items-center bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] max-[360px]:px-6 px-8 max-[360px]:py-1 py-[6px] rounded-[234px]">
                        <p className="font-bold text-[13px] max-[360px]:text-[12px] leading-[110%] tracking-[-2%]">Получить</p>
                    </div>
                </div>
                <div className="rounded-xl bg-[#4E4E4E]/15 py-4 flex justify-center items-center w-full flex flex-col">
                    <div className="text-white text-base text-[13px]">3 вращения</div>
                </div>
            </div>

        </div>
    );
};

export default MainInfo;
