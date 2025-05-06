import { UserScoreSchema, UserScore } from '../types'

export async function fetchUserScores(): Promise<UserScore[]> {
    const res = await fetch('http://localhost:3000/api/all-scores')
    if (!res.ok) throw new Error('…')
    const json = await res.json()

    return UserScoreSchema.array().parse(json)
}
