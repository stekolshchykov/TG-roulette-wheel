class TgHelper {

    TEST_USER_ID: number = 375462975;

    getUserId = (): number => {
        if (typeof window !== "undefined") {
            const tg = window?.Telegram?.WebApp;
            return tg?.initDataUnsafe?.user?.id || this.TEST_USER_ID;
        } else return this.TEST_USER_ID;
    }

}

const tgHelper = new TgHelper();

export default tgHelper;
