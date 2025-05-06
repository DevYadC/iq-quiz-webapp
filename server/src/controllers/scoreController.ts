// src/controllers/scoreController.ts
import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import { Score } from '../models/Score';

export async function getAllScoreCounts(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const counts = await Score.aggregate([
            {
                $group: {
                    _id: { problemSetId: '$problemSetId', score: '$score' },
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    problemSetId: '$_id.problemSetId',
                    score: '$_id.score',
                    count: 1
                }
            },
            { $sort: { problemSetId: 1, score: 1 } }
        ]);

        res.json(counts);
    } catch (err) {
        next(err);
    }
}

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