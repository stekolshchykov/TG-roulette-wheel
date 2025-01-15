import {RootStore} from "@/stores/root-store";
import {FriendDataI} from "@/type";
import {makeAutoObservable} from "mobx";

class FriendsStore {

    data: FriendDataI[] = []

    constructor(public rootStore: RootStore) {
        makeAutoObservable(this);
    }

    setData(data: FriendDataI[]) {
        this.data = data
    }
}

export default FriendsStore
