import React, {useEffect, useState} from "react";

interface Props {
    children?: React.ReactNode;
    size?: "big" | "normal" | "small";
    type?: "accent";
    width?: number;
    onClick?: () => void
    isDisabled?: boolean;
}

const ButtonUi = (props: Props) => {
    const [style, setStyle] = useState<{ width: string; height: string; fontSize: string }>({
        width: "100%",
        height: "30px",
        fontSize: "14px",
    });

    useEffect(() => {
        const width = props.width ? `${props.width}px` : "100%";
        let height = "30px";
        let fontSize = "14px";

        switch (props.size) {
            case "big":
                height = "40px";
                fontSize = "16px";
                break;
            case "normal":
                height = "25px";
                fontSize = "14px";
                break;
            case "small":
                height = "15px";
                fontSize = "10px";
                break;
            default:
                height = "30px";
                fontSize = "14px";
                break;
        }

        setStyle({width, height, fontSize});
    }, [props.width, props.size]);

    return (
        <button
            className={`
                block w-full rounded-[50px] overflow-hidden transition-all duration-300
                  disabled:opacity-40
               ${props.onClick && "hover:scale-105 hover:brightness-110 active:scale-95 active:brightness-90"} 
            `}
            disabled={props.isDisabled}
            style={{width: style.width, height: style.height}}
            onClick={() => {
                if (props.onClick) {
                    props.onClick()
                }
            }}
        >
            <div
                className={`
                    h-full w-full rounded-[50px] flex items-center justify-center 
                    bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] duration-300 transition-all
                `}
            >
                <p
                    className="font-bold leading-[110%] tracking-[-2%] text-white"
                    style={{fontSize: style.fontSize}}
                >
                    {props.children}
                </p>
            </div>
        </button>
    );
};

export default ButtonUi;
