import GiftComponent from "@/components/gift-component";
import MainHeaderComponent from "@/components/main-header-component";
import PageLayout from "@/layout/page-layout";
import React from "react";

const Index = () => {
    return (
        <PageLayout>

            <div className={"flex flex-col gap-6"}>
                <MainHeaderComponent/>
                <GiftComponent/>
            </div>

        </PageLayout>
    );
};

export default Index;
