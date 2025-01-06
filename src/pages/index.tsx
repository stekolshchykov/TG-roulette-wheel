import GiftComponent from "@/components/gift-component";
import MainHeaderComponent from "@/components/main-header-component";
import RouletteComponent from "@/components/roulette-component";
import PageLayout from "@/layout/page-layout";
import React from "react";

const Index = () => {
    return (
        <PageLayout>

            <div className={"flex flex-col gap-6"}>
                <MainHeaderComponent/>
                <GiftComponent/>
                <RouletteComponent/>
            </div>

        </PageLayout>
    );
};

export default Index;
