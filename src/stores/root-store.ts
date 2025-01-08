import FriendsStore from "@/stores/friends-store";
import TasksStore from "@/stores/tasks-store";
import {makeAutoObservable} from "mobx";


export type RootStoreHydration = {
    [key: string]: {
        hydrateFromLocalStore: () => void
    }
};

export class RootStore {

    friendsStore: FriendsStore
    tasksStore: TasksStore

    constructor() {

        this.friendsStore = new FriendsStore(this)
        this.tasksStore = new TasksStore(this)

        makeAutoObservable(this)
    }

    hydrate(initialData?: RootStoreHydration) {
        console.log(initialData)
    }

}
