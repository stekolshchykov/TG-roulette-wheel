import {makeAutoObservable} from "mobx";


export type RootStoreHydration = {
    [key: string]: {
        hydrateFromLocalStore: () => void
    }
};

export class RootStore {


    constructor() {


        makeAutoObservable(this)
    }

    hydrate() {

    }

    test = () => {

        console.log("+++test")

    }

}
