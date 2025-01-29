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
        // TODO: used id needed
        alert(tgHelper.getUserId())
        this.data = await apiHelper.webappTasks(tgHelper.getUserId()) || []
    }

}

export default TasksStore
