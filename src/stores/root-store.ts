import FriendsStore from "@/stores/friends-store";
import RouletteStore from "@/stores/roulette-store";
import TasksStore from "@/stores/tasks-store";
import TelegramStore from "@/stores/telegram-store";
import ProfileStore from "@/stores/profile-store";
import {makeAutoObservable} from "mobx";
import axios from "axios";
import {FetchDataI, TelegramDataI} from "@/type";

export type RootStoreHydration = {
    [key: string]: {
        hydrateFromLocalStore: () => void
    }
}

export class RootStore {
    telegramStore: TelegramStore
    profileStore: ProfileStore
    friendsStore: FriendsStore
    tasksStore: TasksStore
    rouletteStore: RouletteStore

    constructor() {
        this.telegramStore = new TelegramStore(this)
        this.profileStore = new ProfileStore(this)
        this.friendsStore = new FriendsStore(this)
        this.tasksStore = new TasksStore(this)
        this.rouletteStore = new RouletteStore(this)

        makeAutoObservable(this)

        // this.initTelegramData();
    }

    initTelegramData() {
        const telegramData = this.useTelegramInitData()
        this.telegramStore.setData(telegramData)

        if (telegramData && telegramData.user?.id) {
            this.fetchData(telegramData.user.id)
        }
    }

    hydrate(initialData?: RootStoreHydration) {
        console.log(initialData)
    }

    useTelegramInitData(): TelegramDataI {
        if (typeof window === "undefined" || !window.Telegram) {
            return {}
        }

        const firstLayerInitData = Object.fromEntries(
            new URLSearchParams(window.Telegram.WebApp.initData)
        )

        const initData: Record<string, string> = {}
        for (const key in firstLayerInitData) {
            try {
                initData[key] = JSON.parse(firstLayerInitData[key])
            } catch {
                initData[key] = firstLayerInitData[key]
            }
        }

        return initData
    }

    fetchData = (tg_user_id: number) => {
        const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
        axios.post(`${DOMAIN}/api/webapp/`, {tg_user_id: tg_user_id})
            .then(response => {
                const data = response.data.data
                this.rouletteStore.setData(data.available_spins, data.used_spins)
                this.friendsStore.setData(data.friends)
                this.profileStore.setData(data)
            })
            .catch(error => {
                console.error("Error fetching data:", error)
            })
    }
}
