import { useQuery } from '@tanstack/react-query'
import { fetchBarChartScores } from '../api/scores'
import type { BarChartScoreSchema } from '../types'



export function useBarChartScores() {
    return useQuery<BarChartScoreSchema, Error>({
        queryKey: ['barChartScores'],
        queryFn: fetchBarChartScores,
    })
}

