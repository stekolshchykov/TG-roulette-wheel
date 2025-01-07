import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import React from "react";

const LinkToPage = (props: { link: string; title: string; icon: string }) => {
    const router = useRouter();
    const isActive = router.pathname === props.link; // Проверяем, является ли текущий путь активным

    return (
        <Link href={props.link} className={`${isActive ? "bg-main-accent" : ""} px-5 py-3 rounded-2xl`}>
            <div className="flex justify-center">
                <Image src={props.icon} alt="icon" width={24} height={24}/>
            </div>
            <div className="text-xs mt-1 text-white">{props.title}</div>
        </Link>
    );
};

const Menu = () => {
    return (
        <nav
            className={`
                flex justify-center p-2 gap-4 fixed bottom-0 left-0 right-0 z-50 px-4 h-[80px]
                bg-[#4E4E4E]/15 backdrop-blur-[24px]
                border-t border-[#6C3661] rounded-t-xl
                font-proxima font-bold
            `}
        >
            <LinkToPage link="/" icon="/icon/roulette.svg" title="Рулетка"/>
            <LinkToPage link="/friends" icon="/icon/friend.svg" title="Друзья"/>
            <LinkToPage link="/tasks" icon="/icon/task.svg" title="Задания"/>
        </nav>
    );
};

export default Menu;
