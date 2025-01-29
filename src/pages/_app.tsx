import MainLayout from "@/layout/main-layout";
import envHelper from "@/libs/env-helper";
import {RootStoreProvider} from "@/providers/RootStoreProvider";
import type {AppProps} from "next/app";
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "@/globals.css";

function isMobile() {
    if (typeof navigator !== "undefined") {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }
    return false;
}

function MyApp({Component, pageProps}: AppProps) {

    const router = useRouter();

    useEffect(() => {
        if (!isMobile() && router.pathname !== "/game-restriction" && envHelper.mode === "production") {
            router.replace("/game-restriction");
        }
    }, [router.pathname]);

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
