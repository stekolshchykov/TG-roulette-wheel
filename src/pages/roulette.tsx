import GiftComponent from "@/components/gift-component";
import MainHeaderComponent from "@/components/main-header-component";
import MainInfo from "@/components/main-info";
import RouletteComponent from "@/components/roulette-component";
import PageLayout from "@/layout/page-layout";
import { useRootStore } from "@/providers/RootStoreProvider";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";

const Roulette = observer(() => {

    const { rouletteStore } = useRootStore()

    const [userId, setUserId] = useState<string | null>(null);
    const [testData, setTestData] = useState<string | null>(null);

    // localStorage.setItem("spin", `${10}`)


    const rouletteClickHandler = () => {
        rouletteStore.spinNow()
    }

    useEffect(() => {
        rouletteStore.load()
    }, [rouletteStore]);


    useEffect(() => {
        const tg = window?.Telegram?.WebApp;
        const id = tg?.initDataUnsafe?.user?.id || null;
        setUserId(id);
        setTestData(JSON.stringify(tg));
    }, []);

    return (
        <PageLayout>

            <div className={"flex flex-col gap-0"}>

                <div>
                    id: {JSON.stringify(userId)}
                </div>
                <div>
                    testData: {testData}
                </div>
                <MainHeaderComponent />
                <GiftComponent />
                <RouletteComponent
                    spin={rouletteStore.spin}
                    spinTo={rouletteStore.spinTo}
                    onClick={rouletteClickHandler} />
                <MainInfo spin={rouletteStore.spin} />
            </div>

        </PageLayout>
    );
})

export default Roulette;
