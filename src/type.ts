export interface FriendDataI {
    name: string
    bp: number
}

export interface TaskDataI {
    title: string
    reward: number
    link: string
    is_subscribed: boolean
}

export interface FetchDataI {
    available_spins: number
    used_spins: number
    referral_count: number
    friends: FriendDataI[]
}

export interface UserDataI {
    id: number
    first_name: string
    last_name: string
    username: string
    language_code: string
    allows_write_to_pm: string
    photo_url: string
}

export interface TelegramDataI {
    user: UserDataI
    chat_instance: number
    chat_type: string
    auth_date: number
    signature: string
    hash: string
}

export interface ProfileDataI {
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
}
