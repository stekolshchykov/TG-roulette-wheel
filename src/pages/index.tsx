import GiftComponent from "@/components/gift-component";
import MainHeaderComponent from "@/components/main-header-component";
import MainInfo from "@/components/main-info";
import RouletteComponent from "@/components/roulette-component";
import PageLayout from "@/layout/page-layout";
import React, {useEffect, useState} from "react";

const Index = () => {

    const [spin, setSpin] = useState(0);

    // spin
    useEffect(() => {
        const spinInLocalStorage = localStorage.getItem("spin")
        setSpin(spinInLocalStorage ? +`${spinInLocalStorage}` : 100)
    }, []);

    // // spin
    // useEffect(() => {
    //     localStorage.setItem("spin", `${spin}`)
    // }, [spin]);

    const rouletteClickHandler = () => {
        setSpin(spin - 1)
    }

    return (
        <PageLayout>

            <div className={"flex flex-col gap-6"}>
                <MainHeaderComponent/>
                <GiftComponent/>
                <RouletteComponent spin={spin} onClick={rouletteClickHandler}/>
                <MainInfo spin={spin}/>
            </div>

        </PageLayout>
    );
};

export default Index;
