import {RootStore} from "@/stores/root-store";
import {TaskDataI} from "@/type";
import {makeAutoObservable} from "mobx";

class TasksStore {

    data: TaskDataI[] = []

    constructor(public rootStore: RootStore) {

        this.load()

        makeAutoObservable(this);
    }

    private load = () => {
        // TODO: Logic
        this.data = [
            {
                title: "Подпишись на канал",
                reward: 1,
                link: "https://v2.wbruletka.games/tasks"
            },
            {
                title: "Подпишись на канал",
                reward: 1,
                link: "https://v2.wbruletka.games/tasks"
            },
            {
                title: "Подпишись на канал",
                reward: 1,
                link: "https://v2.wbruletka.games/tasks"
            },
            {
                title: "Подпишись на канал",
                reward: 1,
                link: "https://v2.wbruletka.games/tasks"
            },
            {
                title: "Подпишись на канал",
                reward: 1,
                link: "https://v2.wbruletka.games/tasks"
            },
            {
                title: "Подпишись на канал",
                reward: 1,
                link: "https://v2.wbruletka.games/tasks"
            },
            {
                title: "Подпишись на канал",
                reward: 1,
                link: "https://v2.wbruletka.games/tasks"
            },
            {
                title: "Подпишись на канал",
                reward: 1,
                link: "https://v2.wbruletka.games/tasks"
            },
            {
                title: "Подпишись на канал",
                reward: 1,
                link: "https://v2.wbruletka.games/tasks"
            },
            {
                title: "Подпишись на канал",
                reward: 1,
                link: "https://v2.wbruletka.games/tasks"
            },
            {
                title: "Подпишись на канал",
                reward: 1,
                link: "https://v2.wbruletka.games/tasks"
            },
        ]
    }

}

export default TasksStore
