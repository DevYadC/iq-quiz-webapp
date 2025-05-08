import { useQuery } from '@tanstack/react-query'
import { fetchUserScores } from '../api/scores'
import type { UserScore } from '../types'


export function useUserScores() {
    return useQuery<UserScore[], Error>({
        queryKey: ['userScores'],
        queryFn: fetchUserScores,
    })
}

