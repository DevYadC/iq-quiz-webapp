// src/controllers/scoreController.ts
import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import { Score } from '../models/Score';

export async function getBarChartScores(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const counts = await Score.aggregate([
            {
                $group: {
                    _id: {
                        problemSetName: '$problemSetName',
                        score: '$score',
                        totalQuestions: '$totalQuestions'
                    },
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    problemSetName: '$_id.problemSetName',
                    score: '$_id.score',
                    totalQuestions: '$_id.totalQuestions',
                    count: 1
                }
            },
            { $sort: { problemSetName: 1, score: 1 } }
        ]);

        // Transform to format required by the frontend material-ui bar chart
        const result: { [key: string]: number[] } = {};
        for (const { problemSetName, score, totalQuestions, count } of counts) {
            if (!result[problemSetName]) {
                result[problemSetName] = Array(totalQuestions + 1).fill(0);
            }
            result[problemSetName][score] = count;
        }

        res.json(result);
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
