import { NextFunction, Request, Response } from 'express';
import { Score } from "../models/Score";
import { ProblemSet } from "../models/ProblemSet";
import { IProblemSet } from "../models/ProblemSet";



export async function postScore(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const calculateScore = (pS: IProblemSet, uA: any[]) => {
        let score = 0;
        for (let i = 0; i < pS.questions.length; i++) {
            if (uA[i] === pS.questions[i].answer) {
                score++;
            }
        }
        return score;
    }

    try {
        const { problemSetName, userAnswers } = req.body;
        const problemSet = await ProblemSet.findOne({ name: problemSetName });
        if (!problemSet) {
            return res.status(404).json({ message: 'Problem set not found' });
        }
        const totalQuestions = problemSet.questions.length;
        const score = calculateScore(problemSet, userAnswers);
        const newScore = new Score({ problemSetName, score, totalQuestions });
        await newScore.save();
        res.status(201).json(newScore);
    } catch (err) {
        next(err);
    }
}   
