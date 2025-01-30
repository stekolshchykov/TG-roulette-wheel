import {RootStore} from "@/stores/root-store";
import {makeAutoObservable} from "mobx";

class FriendsStore {

    constructor(public rootStore: RootStore) {
        makeAutoObservable(this);
    }

}

export default FriendsStore
