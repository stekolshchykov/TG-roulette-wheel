export interface FriendDataI {
    name: string
    bp: number
}

export interface TaskDataI {
    title: string
    reward: number
    link: string
}

export interface ApiWebappReponseI {
    available_spins: number
    used_spins: number
    referral_count: number
    free_spin_at: string
    gift_at: string
    gift_link: string
    partner_card_link: string
    spin_prize_link: string
    is_referral_bonus_available: boolean
    is_referral_bonus_used: boolean
    friends: {
        name: string
        bp: number
    }[]
}

