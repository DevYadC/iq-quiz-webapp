import { Request, Response, NextFunction } from 'express';
import { Score } from '../models/Score';

export async function getAllScores(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const scores = await Score.find();
        res.json(scores);
    } catch (err) {
        next(err);
    }
}
