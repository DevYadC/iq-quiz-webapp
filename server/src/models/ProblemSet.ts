import { Schema, model, Document } from 'mongoose'

export interface IQuestion {
    question: string
    options: string[]
    answer: number
}

export interface IProblemSet extends Document {
    setName: string
    questions: IQuestion[]
}

const QuestionSchema = new Schema<IQuestion>(
    {
        question: { type: String, required: true },
        options: { type: [String], required: true },
        answer: { type: Number, required: true },
    },
    { _id: false }
)

const ProblemSetSchema = new Schema<IProblemSet>(
    {
        setName: { type: String, required: true },
        questions: { type: [QuestionSchema], required: true },
    }
)

export const ProblemSet = model<IProblemSet>('ProblemSet', ProblemSetSchema)
