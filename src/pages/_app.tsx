import MainLayout from "@/layout/main-layout";
import type {AppProps} from "next/app";
import React from "react";
import "@/globals.css";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    </>
}

export default MyApp;
