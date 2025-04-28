import { useQuery } from '@tanstack/react-query'
import { fetchProblemSets } from '../api/problemSets'
import type { ProblemSet } from '../types'

export function useProblemSets() {
    return useQuery<ProblemSet[], Error>({
        queryKey: ['problemSets'],
        queryFn: fetchProblemSets,
        staleTime: 1000 * 60 * 20,  // cache for 20 minutes
    })
}
