import apiHelper from "@/libs/api-helper";
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
        this.data = await apiHelper.webappTasks(668242216) || []
    }

}

export default TasksStore
