class TgHelper {

    TEST_USER_ID: number = 375462975;

    getUserId = (): number => {
        if (typeof window !== "undefined") {
            const tg = window?.Telegram?.WebApp;
            return tg?.initDataUnsafe?.user?.id || this.TEST_USER_ID;
        } else return this.TEST_USER_ID;
    }

    openTelegramLink = (link: string): void => {
        if (typeof window !== "undefined") {
            window?.Telegram?.WebApp?.openTelegramLink(link)
        }
    }

    openLink = (link: string): void => {
        if (typeof window !== "undefined") {
            window.Telegram.WebApp.openLink(link);
        }
    }

}

const tgHelper = new TgHelper();

export default tgHelper;
