import GiftComponent from "@/components/gift-component";
import MainHeaderComponent from "@/components/main-header-component";
import MainInfo from "@/components/main-info";
import RouletteComponent from "@/components/roulette-component";
import PageLayout from "@/layout/page-layout";
import apiHelper from "@/libs/api-helper";
import tgHelper from "@/libs/tg-helper";
import {useRootStore} from "@/providers/RootStoreProvider";
import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";

const Roulette = observer(() => {

    const {rouletteStore} = useRootStore()


    // localStorage.setItem("spin", `${10}`)


    const rouletteClickHandler = () => {
        rouletteStore.spinNow()
    }

    useEffect(() => {
        rouletteStore.load()
    }, [rouletteStore]);

    const [webappTasks, setWebappTasks] = useState<any>();
    const getUserId = tgHelper?.getUserId()

    const load = async () => {
        const webappTasks = await apiHelper.webappTasks(getUserId)
        console.log("+++webappTasks", webappTasks)
        setWebappTasks(webappTasks)
    }

    useEffect(() => {
        if (getUserId) {
            load()
        }
    }, [getUserId]);

    return (
        <PageLayout>

            <div className={"flex flex-col gap-0"}>

                <div>
                    id: {getUserId}
                </div>

                <div>
                    webappTasks: {webappTasks}
                </div>

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
