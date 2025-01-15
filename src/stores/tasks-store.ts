import {RootStore} from "@/stores/root-store";
import {FriendDataI, TaskDataI} from "@/type";
import {makeAutoObservable} from "mobx";
import axios from "axios";

class TasksStore {

    data: TaskDataI[] = []

    constructor(public rootStore: RootStore) {

        makeAutoObservable(this);
    }


    public fetch_tasks(tg_user_id: number) {
        const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
        axios.post(`${DOMAIN}/api/webapp/tasks/`, {tg_user_id: tg_user_id})
            .then(response => {
                const data = response.data
                this.data = data.tasks
            })
            .catch(error => {
                console.error("Error fetching data:", error)
            })
    }

}

export default TasksStore
