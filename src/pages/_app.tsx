import MainLayout from "@/layout/main-layout";
import {RootStoreProvider} from "@/providers/RootStoreProvider";
import type {AppProps} from "next/app";
import React from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "@/globals.css";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <RootStoreProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
            <ToastContainer/>
        </RootStoreProvider>
    </>
}

export default MyApp;
