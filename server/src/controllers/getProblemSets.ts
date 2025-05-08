import { Request, Response, NextFunction } from 'express';
import { ProblemSet, IProblemSet } from '../models/ProblemSet';

export async function getAllProblemSets(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const sets = await ProblemSet
            .find<IProblemSet>()
            .select('-_id setName questions.question questions.options')
            .lean();
        res.json(sets);
    } catch (err) {
        next(err);
    }
}
