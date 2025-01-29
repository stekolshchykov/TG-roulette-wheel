import apiHelper from "@/libs/api-helper";
import tgHelper from "@/libs/tg-helper";
import {RootStore} from "@/stores/root-store";
import {ApiWebappReponseI} from "@/type";
import {makeAutoObservable} from "mobx";
// import { makeAutoObservable, reaction } from "mobx";

declare global {
    interface Window {
        Telegram: any;
    }
}

const FREE_SPIN_TIME = 86400

class RouletteStore {

    public spin = 0;
    public loaded = false; // Загружены ли данные из localStorage
    public spinCounter = 0;
    public spinTo = [0, 0, 0]
    public modal: "5k" | "iphone" | "" = ""

    public timeLeft = 0;

    public free_spin_at = 0;

    constructor(public rootStore: RootStore) {
        makeAutoObservable(this);
    }

    public getFreeSpin = async () => {
        // this.spin += 1
        // this.timeLeft = FREE_SPIN_TIME;
        const tg_user_id = tgHelper.getUserId() || 668242216
        const freeSpine = await apiHelper.webappFreeSpin(tg_user_id)
        console.log("+++freeSpine", freeSpine)

        this.load()
    }

    public spinNow = async () => {

        if (this.spin <= 0) return


        this.spin--;
        this.spinCounter++;

        const getRandomNumber = (min: number, max: number): number => {
            return Math.floor(Math.random() * (max - min + 1)) + min + (360 * Number.parseInt(`${(Math.random() * 10) / 4}`));
        };

        const diapazone = {
            zero: {
                inner: {from: 131, to: 178},
                middle: {from: 70, to: 113},
                outer: {from: 31, to: 52}
            },
            fiveK: {
                inner: {from: 30, to: 75},
                middle: {from: 160, to: 200},
                outer: {from: 10, to: 30}
            },
            iphone: {
                inner: {from: 131, to: 178},
                middle: {from: 70, to: 113,},
                outer: {from: 78, to: 101}
            }
        }

        if (this.spinCounter % 3 === 0) {
            const random = Math.floor(Math.random() * 3) + 1
            this.spinTo = [
                random === 1
                    ? getRandomNumber(diapazone.fiveK.inner.from, diapazone.fiveK.inner.to)
                    : getRandomNumber(diapazone.zero.inner.from, diapazone.zero.inner.to),
                random === 2
                    ? getRandomNumber(diapazone.fiveK.middle.from, diapazone.fiveK.middle.to)
                    : getRandomNumber(diapazone.zero.middle.from, diapazone.zero.middle.to),
                random === 3
                    ? getRandomNumber(diapazone.fiveK.outer.from, diapazone.fiveK.outer.to)
                    : getRandomNumber(diapazone.zero.outer.from, diapazone.zero.outer.to)
            ]
            this.modal = "5k"
        } else {
            this.spinTo = [
                getRandomNumber(diapazone.zero.inner.from, diapazone.zero.inner.to),
                getRandomNumber(diapazone.zero.middle.from, diapazone.zero.middle.to),
                getRandomNumber(diapazone.zero.outer.from, diapazone.zero.outer.to)
            ]
            this.modal = ""
        }

        await apiHelper.webappSpin(tgHelper.getUserId())

    };

    public load = async () => {
        // TODO: remove after test
        const tg_user_id = tgHelper.getUserId() || 668242216
        const dataRaw: ApiWebappReponseI | null = await apiHelper.webapp(tg_user_id)
        if (dataRaw) {
            this.spin = dataRaw.available_spins || 0
            this.free_spin_at = new Date(dataRaw?.free_spin_at).getTime()
        }

        ///////////////////////

        this.loaded = true
    };


}

export default RouletteStore;
