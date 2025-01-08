import {RootStore} from "@/stores/root-store";
import {FriendDataI} from "@/type";
import {makeAutoObservable} from "mobx";

class FriendsStore {

    data: FriendDataI[] = []

    constructor(public rootStore: RootStore) {

        this.load()

        makeAutoObservable(this);
    }

    private load = () => {
        // TODO: Logic
        this.data = [
            {
                name: "Anton",
                bp: 1
            },
            {
                name: "Sergey",
                bp: 1
            }
        ]
    }

}

export default FriendsStore
