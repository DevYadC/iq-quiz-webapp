import { z } from 'zod'

export const QuestionSchema = z.object({
    question: z.string(),
    options: z.array(z.string()),
})
export const ProblemSetSchema = z.object({
    setName: z.string(),
    questions: z.array(QuestionSchema),
})

export const ScoreSchema = z.object({
    score: z.number(),
    problemSet: ProblemSetSchema,
})

export const UserScoreSchema = z.object({
    _id: z.string(),
    problemSetId: z.string(),
    problemSetName: z.string(),
    score: z.number(),
    totalQuestions: z.number(),
    recordedAt: z.string(), // or z.coerce.date() if you want to parse to Date
    __v: z.number(),
})

export type Question = z.infer<typeof QuestionSchema>
export type ProblemSet = z.infer<typeof ProblemSetSchema>
export type Score = z.infer<typeof ScoreSchema>
export type UserScore = z.infer<typeof UserScoreSchema>
