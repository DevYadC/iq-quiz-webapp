import { ProblemSetSchema, ProblemSet } from '../types'

export async function fetchProblemSets(): Promise<ProblemSet[]> {
    const res = await fetch('http://localhost:3000/api/problem-sets')
    if (!res.ok) throw new Error('…')
    const json = await res.json()

    return ProblemSetSchema.array().parse(json)
}
