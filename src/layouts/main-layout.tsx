import Menu from "@/layouts/menu";

const MainLayout = (props: { children?: React.ReactNode }) => {
    return (
        <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
            <div style={{flexGrow: 1, overflowY: "auto"}}>{props?.children}</div>
            <Menu/>
        </div>
    );
}

export default MainLayout;
