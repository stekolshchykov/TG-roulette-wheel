import {RootStore} from "@/stores/root-store";
import {TelegramDataI} from "@/type";
import {makeAutoObservable} from "mobx";

class TelegramStore {

    data: TelegramDataI = {}

    constructor(public rootStore: RootStore) {
        makeAutoObservable(this);
    }

    setData(data: TelegramDataI) {
        this.data = data
    }
}

export default TelegramStore
