import { Schema, model, Types, Document } from 'mongoose';

export interface IScore extends Document {
    problemSetId: Types.ObjectId;
    score: number;
    totalQuestions: number;
    recordedAt: Date;
}

const ScoreSchema = new Schema<IScore>(
    {
        problemSetId: {
            type: Schema.Types.ObjectId,
            ref: 'ProblemSet',
            required: true,
            index: true,
        },
        score: {
            type: Number,
            required: true,
            min: 0,
        },
        totalQuestions: {
            type: Number,
            required: true,
            min: 1,
        },
        recordedAt: {
            type: Date,
            default: () => new Date(),
        },
    }
);



export const Score = model<IScore>('Score', ScoreSchema);
