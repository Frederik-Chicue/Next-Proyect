export interface ChampionSummary {
    isGuessed: unknown
    id: string
    name: string
    title: string
    image: {
        full: string
    }
}

export interface ChampionListResponse {
    data: {
        [key: string]: ChampionSummary
    }
}

export interface ChampionData {
    id: string
    name: string
    title: string
    blurb: string
    tags: string[]
    image: {
        full: string
    }
    stats: {
        hp: number
        attackdamage: number
        armor: number
    }
}
