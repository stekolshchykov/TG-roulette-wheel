import GiftComponent from "@/components/gift-component";
import MainHeaderComponent from "@/components/main-header-component";
import MainInfo from "@/components/main-info";
import RouletteComponent from "@/components/roulette-component";
import PageLayout from "@/layout/page-layout";
import {useRootStore} from "@/providers/RootStoreProvider";
import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";

const Roulettte = observer(() => {

    const {rouletteStore, dataStore} = useRootStore()

    const rouletteClickHandler = () => {
        rouletteStore.spinNow()
    }

    useEffect(() => {
        dataStore.load()
    }, [dataStore]);


    return (
        <PageLayout>
            <div className={"flex flex-col gap-0"}>
                <MainHeaderComponent/>
                <GiftComponent/>
                <RouletteComponent
                    spin={dataStore.data.spin}
                    spinTo={rouletteStore.spinTo}
                    onClick={rouletteClickHandler}/>
                <MainInfo spin={dataStore.data.spin}/>
            </div>

        </PageLayout>
    );
})

export default Roulettte;
