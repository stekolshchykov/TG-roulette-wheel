import apiHelper from "@/libs/api-helper";
import tgHelper from "@/libs/tg-helper";
import {RootStore} from "@/stores/root-store";
import {ApiWebappReponseI} from "@/type";
import {makeAutoObservable, toJS} from "mobx";

class DataStore {

    public data: {
        spin: number,
        free_spin_at: number,
        is_referral_bonus_available: boolean,
        partner_card_link: string,
        used_spins: number,
        friends: {
            name: string
            bp: number
        } [],
    } = {
        spin: 0,
        free_spin_at: 0,
        is_referral_bonus_available: false,
        partner_card_link: "",
        used_spins: 0,
        friends: [],
    }
    public loaded = false
    private dataRaw: null | ApiWebappReponseI = null

    constructor(public rootStore: RootStore) {
        this.load()
        makeAutoObservable(this);
    }

    load = async () => {
        this.dataRaw = await apiHelper.webapp(tgHelper.getUserId())

        console.log("+++this.dataRaw", toJS(this.dataRaw))

        ///////////////////////

        if (this.dataRaw) {
            this.data.spin = this.dataRaw.available_spins || 0
            this.data.free_spin_at = new Date(this.dataRaw?.free_spin_at).getTime()
            this.data.is_referral_bonus_available = this.dataRaw.is_referral_bonus_available
            this.data.partner_card_link = this.dataRaw.partner_card_link
            this.data.used_spins = this.dataRaw.used_spins
            this.data.friends = this.dataRaw?.friends || []
        }

        ///////////////////////

        this.loaded = true
    }

}

export default DataStore
