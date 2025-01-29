import apiHelper from "@/libs/api-helper";
import tgHelper from "@/libs/tg-helper";
import {RootStore} from "@/stores/root-store";
import {TaskDataI} from "@/type";
import {makeAutoObservable} from "mobx";

class TasksStore {

    data: TaskDataI[] = []

    constructor(public rootStore: RootStore) {

        this.load()

        makeAutoObservable(this);
    }

    private load = async () => {
        // TODO: remove after test
        const tg_user_id = tgHelper.getUserId() || 668242216
        this.data = await apiHelper.webappTasks(tg_user_id) || []
    }

    /**
     * 5. Вот это тоже не понял куда подставить
     *      "partner_card_link": "https://www.google.com.ua/",
     *         "spin_prize_link": "https://www.google.com.ua/",
     */

}

export default TasksStore
