import {RootStore} from "@/stores/root-store";
import {ProfileDataI} from "@/type";
import {makeAutoObservable} from "mobx";

class ProfileStore {

    data: ProfileDataI = {}

    constructor(public rootStore: RootStore) {
        makeAutoObservable(this);
    }

    setData(data: ProfileDataI) {
        this.data = data
    }
}

export default ProfileStore
