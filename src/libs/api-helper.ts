import axiosBackendInstance from "@/libs/axios-backend-instance";
import {ApiWebappReponseI} from "@/type";

class ApiHelper {

    /**
     * POST /api/webapp/tasks/ - список задач (каналів для підписок)
     * @param tg_user_id
     */
    webappTasks = async (tg_user_id: number): Promise<{
        title: string
        reward: number
        link: string
        is_subscribed: boolean
    }[] | null> => {
        return await axiosBackendInstance
            .post("/api/webapp/tasks/", {tg_user_id})
            .then((response) => {
                return response?.data?.tasks || null
            })
            .catch((error: any) => {
                console.log("webappTasks error", error)
                return null
            })
    }

    /**
     * POST /api/webapp/ - основна інфа (к-сть, спінів, час до подарунку, лінки для кнопок)
     * @param tg_user_id
     */
    webapp = async (tg_user_id: number): Promise<ApiWebappReponseI | null> => {
        return await axiosBackendInstance
            .post("/api/webapp/", {tg_user_id})
            .then((response) => {
                return response?.data?.data || null
            })
            .catch((error: any) => {
                console.log("webapp error", error)
                return null
            })
    }

    /**
     * POST /api/webapp/spin/ - відправити запит щоб зарахувало прокручений спін
     * @param tg_user_id
     */
    webappSpin = async (tg_user_id: number): Promise<boolean> => {
        return await axiosBackendInstance
            .post("/api/webapp/spin/", {tg_user_id})
            .then(() => true)
            .catch((error) => {
                console.log("webappSpin error", error)
                return false
            })
    }

    /**
     * POST /api/webapp/referral-bonus/ - отримати бонус +3 спіна (ліва кнопка)
     * @param tg_user_id
     */
    webappReferralBonus = async (tg_user_id: number): Promise<any> => {
        return await axiosBackendInstance
            .post("/api/webapp/referral-bonus/", {tg_user_id})
            .then((response) => {
                console.log("+++webappReferralBonus response", response)
                return null
            })
            .catch((error) => {
                console.log("webappReferralBonus error", error)
                return null
            })
    }

    /**
     * POST /api/webapp/free-spin/ - отримати безкоштовний спін (права кнопка)
     * @param tg_user_id
     */
    webappFreeSpin = async (tg_user_id: number): Promise<any> => {
        return await axiosBackendInstance
            .post("/api/webapp/free-spin/", {tg_user_id})
            .then((response) => {
                console.log("+++webappFreeSpin response", response)
                return null
            })
            .catch((error) => {
                console.log("webappFreeSpin error", error)
                return null
            })
    }


}

const apiHelper = new ApiHelper();

export default apiHelper;
