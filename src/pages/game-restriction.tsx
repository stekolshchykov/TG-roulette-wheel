const GameRestriction = () => {

    return <div className="h-screen w-full relative bg-[#151515] overflow-hidden font-proxima text-white">

        <div className="bg-[#151517] w-screen h-screen relative overflow-hidden text-white font-proxima">
            <div className="absolute inset-0 pointer-events-none z-[100]">
                <img
                    src="/img/mainglow-Dj1P_1uN.webp" width="500" height="300" alt=""
                    className="absolute left-1/2 w-full bottom-[-20%]"
                    style={{transform: "translate(-50%, -50%) scale(5)"}}/>
                <img
                    src="/img/barright-gAs5sVTc.webp" width="200" height="200"
                    className="absolute bottom-[0%]" style={{transform: "scale(2) translateX(55%);"}}/>
                {/*<img*/}
                {/*    src="/img/assets/barleft-CoQDTOqx.webp" width="200" height="200"*/}
                {/*    className="absolute bottom-[0%]" style={{transform: "scale(2) translateX(-20%);"}}/>*/}
                <img
                    src="/img/whiteroung-DPfb6hRO.webp" width="300" height="300"
                    className="absolute bottom-[-24%]" style={{transform: "scale(2);"}}/>
                <img
                    src="/img/bottomglow-De6_kfy1.webp" width="300" height="300"
                    className="absolute bottom-[-22%]" style={{transform: "scale(2);"}}/>
            </div>
            <div className="flex flex-col items-center justify-center h-screen"><p
                className="text-[32px] font-[800] leading-[120%] text-center z-[100]">Играть можно только на
                смартфоне</p>
                <img src="/img/qr-DvoTCisz.webp" alt="qr"/>
                <p
                    className="text-[15px] font-[800] leading-[120%] text-center z-[100]">Отсканируйте QR-код, чтобы
                    открыть
                    игру в смартфоне</p></div>
        </div>

    </div>

}

export default GameRestriction
