import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkToPage = (props: { link: string; title: string; icon: string; isActive: boolean }) => {
    return (
        <li className={`text-white ${props.isActive ? "bg-main-accent" : ""} flex gap-2 w-full px-4 py-3 rounded-2xl`}>
            <Link href={props?.link} className={"flex gap-2"}>
                <Image src={props.icon} alt="icon" width={24} height={24}/>
                <span className="truncate">{props.title}</span>
            </Link>
        </li>
    );
};

const MainHeaderComponent = () => {


    return <>

        <ul className="flex text-white gap-3">
            <LinkToPage link={"/coupons"} icon={"/icon/coupon.svg"} title={"Мои купоны"} isActive={true}/>
            <li
                className={`text-white  flex gap-2 w-full px-4 py-3 rounded-2xl cursor-pointer`}>
                <Link href={"/how-to-play"} className={"flex gap-2"}>
                    <Image src={"/icon/question.svg"} alt="icon" width={24} height={24}/>
                    <span className="truncate">Как играть?</span>
                </Link>
            </li>
        </ul>


    </>
};

export default MainHeaderComponent;
