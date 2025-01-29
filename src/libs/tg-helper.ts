class TgHelper {

  getUserId = () => {
    if (typeof window !== "undefined") {
      const tg = window?.Telegram?.WebApp;
      return tg?.initDataUnsafe?.user?.id || null;
    }
  }

}

const tgHelper = new TgHelper();

export default tgHelper;