import type { ProblemSet } from '../types'

export async function fetchProblemSets(): Promise<ProblemSet[]> {
    const res = await fetch('http://localhost:3000/api/problem-sets')
    if (!res.ok) throw new Error('Failed to load')
    return res.json()
}
