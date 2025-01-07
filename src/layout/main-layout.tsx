import Menu from "@/layout/menu";
import {useRouter} from "next/router";

const MainLayout = (props: { children?: React.ReactNode }) => {

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
