import Link from "next/link";

const MainLayout = (props: {children?: React.ReactNode}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <div style={{ flexGrow: 1 }}>{props?.children}</div>
            <nav style={{ display: "flex", justifyContent: "center", padding: "10px", background: "#f0f0f0" }}>
                <Link href={"/"} style={{ margin: "0 10px" }}>Рулетка</Link>
                <Link href={"/friends"} style={{ margin: "0 10px" }}>Друзья</Link>
                <Link href={"/tasks"} style={{ margin: "0 10px" }}>Задания</Link>
            </nav>
        </div>
    );
}

export default MainLayout;
