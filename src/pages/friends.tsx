import PageLayout from "@/layout/page-layout";
import {useRootStore} from "@/providers/RootStoreProvider";
import {observer} from "mobx-react-lite";
import Image from "next/image";

const Friends = observer(() => {

    const {friendsStore} = useRootStore()

    const url = "https://t.me/Ruletkawinbot?start=ref_375462975"

    const onCopyHandler = () => {
        navigator.clipboard.writeText(url)
    }

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
                    {url}
                </p>
                <Image
                    src={"/icon/copy.svg"}
                    alt={""}
                    className={"cursor-pointer"}
                    width={12}
                    height={12}
                    onClick={onCopyHandler}/>
            </div>
        </div>


        <div className="flex flex-col border border-[#202023] rounded-[24px] mt-7 py-2 px-4 gap-y-[2px] h-[154px]"><p
            className="text-[20px] font-bold leading-24px]">Статистика</p>
            <div className="flex justify-center gap-x-2">
                <div className="relative w-full">
                    <div className="border border-[#202023] rounded-2xl w-full h-[90px] relative overflow-hidden">

                        <p className="absolute top-[25%] left-1/2 -translate-x-1/2 text-3xl leading-9 font-bold">
                            {friendsStore.data.length}
                        </p>
                        <p className="absolute bottom-2 w-full text-sm font-bold leading-4 text-center">
                            Всего друзей
                        </p>
                        <div
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[104px] h-3 rounded-xl bg-[#FC8DFF] opacity-100 blur-2xl -mb-4"></div>
                    </div>
                </div>
                <div className="relative w-full">
                    <div className="border border-[#202023] rounded-2xl w-full h-[90px] relative overflow-hidden">
                        <p className="absolute top-[25%] left-1/2 -translate-x-1/2 text-3xl leading-9 font-bold">
                            {friendsStore.data.length}
                        </p>
                        <p
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
                {friendsStore.data.length === 0 && <>
                    <Image src={"/icon/users.svg"} alt={"icon"} width={79} height={79}/>
                    <Image src={"/icon/users.svg"} alt={"icon"} width={79}
                           className={"opacity-75 absolute blur-[24.6px]"}
                           height={79}/>
                </>}
            </div>
            {friendsStore.data.length === 0 &&
                <div className="flex flex-col items-center justify-center mt-2 gap-y-2"><p
                    className="text-[25px] font-bold leading-[30px]">Пока пусто</p><p
                    className="text-[13px] leading-[16px] text-center opacity-10">Здесь будет список друзей,
                    которых <br/> вы пригласили</p></div>}
            {friendsStore.data.length !== 0 &&
                <ul className="flex flex-col items-center justify-center mt-2 gap-y-2 px-4 mt-4">
                    {friendsStore.data.map(friend => {
                        return <li key={friend.name + friend.bp} className={"w-full flex justify-between text-[13px]"}>
                            <div className={"flex gap-1 items-center"}>
                                <div className={`
                                        h-[30px] w-[30px] rounded-[50px] flex items-center justify-center 
                                        bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] duration-300 transition-all
                                    `}>
                                    <Image src={"/icon/friend.svg"} alt={"icon"} width={15} height={15}/>
                                </div>
                                {friend.name}
                            </div>
                            <div className={"font-bold"}>+{friend.bp}BP</div>
                        </li>
                    })}
                </ul>}
        </div>

    </PageLayout>

})

export default Friends
