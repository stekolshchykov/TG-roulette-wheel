import GiftComponent from "@/components/gift-component";
import MainHeaderComponent from "@/components/main-header-component";
import MainInfo from "@/components/main-info";
import RouletteComponent from "@/components/roulette-component";
import PageLayout from "@/layout/page-layout";
import {useRootStore} from "@/providers/RootStoreProvider";
import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";

const Roulette = observer(() => {

    const {rouletteStore} = useRootStore()


    // localStorage.setItem("spin", `${10}`)


    const rouletteClickHandler = () => {
        rouletteStore.spinNow()
    }

    useEffect(() => {
        rouletteStore.load()
    }, [rouletteStore]);

    return (
        <PageLayout>

            <div className={"flex flex-col gap-0"}>
                <MainHeaderComponent/>
                <GiftComponent/>
                <RouletteComponent
                    spin={rouletteStore.spin}
                    spinTo={rouletteStore.spinTo}
                    onClick={rouletteClickHandler}/>
                <MainInfo spin={rouletteStore.spin}/>
            </div>

        </PageLayout>
    );
})

export default Roulette;
