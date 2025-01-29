class TgHelper {

    getUserId = (): number => {
        if (typeof window !== "undefined") {
            const tg = window?.Telegram?.WebApp;
            return tg?.initDataUnsafe?.user?.id || 0;
        } else return 0
    }

}

const tgHelper = new TgHelper();

export default tgHelper;
