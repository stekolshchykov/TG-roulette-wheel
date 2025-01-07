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
    return (
        <ul className="flex text-white gap-3">
            <LinkToPage link={"/coupons"} icon={"/icon/coupon.svg"} title={"Мои купоны"} isActive={true}/>
            <LinkToPage link={"#"} icon={"/icon/question.svg"} title={"Как играть?"} isActive={false}/>
        </ul>
    );
};

export default MainHeaderComponent;
