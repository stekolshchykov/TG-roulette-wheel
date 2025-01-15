import GiftComponent from "@/components/gift-component";
import MainHeaderComponent from "@/components/main-header-component";
import MainInfo from "@/components/main-info";
import RouletteComponent from "@/components/roulette-component";
import PageLayout from "@/layout/page-layout";
import {useRootStore} from "@/providers/RootStoreProvider";
import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";
import axios from "axios";

const Roulette = observer(() => {

    const {rouletteStore, telegramStore} = useRootStore()


    // localStorage.setItem("spin", `${10}`)


    const rouletteClickHandler = () => {
        rouletteStore.spinNow()

        // send when spin used
        const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
        axios.post(`${DOMAIN}/api/webapp/spin/`, {tg_user_id: telegramStore.data.user.id})
            .then(response => {
            })
            .catch(error => {
                console.error(error)
        })
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
