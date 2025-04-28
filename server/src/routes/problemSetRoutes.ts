import { Router, Request, Response, NextFunction } from 'express'
import ProblemSet, { IProblemSet } from '../models/ProblemSets'

const router = Router()

// GET /api/problem-sets
router.get(
    '/',
    async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const names = ['Critical Thinking', 'Verbal Comprehension']
            const sets = await ProblemSet
                .find<IProblemSet>()
                .select('-_id setName questions.question questions.options') // drop `answer`
                .lean()
            res.json(sets)
        } catch (err) {
            next(err)
        }
    }
)

export default router
