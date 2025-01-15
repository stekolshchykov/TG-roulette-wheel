import Menu from "@/layout/menu";
import {useRouter} from "next/router";
import {useRootStore} from "@/providers/RootStoreProvider";
import {useEffect} from "react";

const MainLayout = (props: { children?: React.ReactNode }) => {
    const rootStore = useRootStore();
    useEffect(() => {
        if (rootStore) {
            rootStore.initTelegramData();
        }
    }, [rootStore]);

    const router = useRouter()

    const isHowToPlayPage = router.pathname === "/how-to-play"

    return (
        <div style={{display: "flex", flexDirection: "column", height: "100vh"}} className={"p-1"}>
            <div style={{flexGrow: 1, overflowY: "auto"}}>{props?.children}</div>
            {!isHowToPlayPage && <Menu/>}
        </div>
    );
}

export default MainLayout;
