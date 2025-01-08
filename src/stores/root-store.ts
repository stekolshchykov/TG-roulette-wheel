import FriendsStore from "@/stores/friends-store";
import {makeAutoObservable} from "mobx";


export type RootStoreHydration = {
    [key: string]: {
        hydrateFromLocalStore: () => void
    }
};

export class RootStore {

    friendsStore: FriendsStore

    constructor() {

        this.friendsStore = new FriendsStore(this)

        makeAutoObservable(this)
    }

    hydrate() {

    }

}
