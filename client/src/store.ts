import { create } from 'zustand'
import type { ProblemSet } from './types'

interface QuizState {
    activeSet: ProblemSet | null
    userAnswers: number[]
    currQuestion: number
    selectSet: (probSet: ProblemSet) => void
    setAnswer: (answer: number) => void
    nextQuestion: () => void
    prevQuestion: () => void
}

export const useQuizStore = create<QuizState>((set, get) => ({
    // state
    activeSet: null,
    userAnswers: [],
    currQuestion: 0,

    // actions
    selectSet: (probSet) =>
        set({
            activeSet: probSet,
            currQuestion: 0,
            userAnswers: Array(probSet.questions.length).fill(-1),
        }),

    setAnswer: (answer) => {
        const { currQuestion, userAnswers } = get()
        const updated = [...userAnswers]
        updated[currQuestion] = answer
        set({ userAnswers: updated })
    },

    nextQuestion: () => {
        const { currQuestion, activeSet } = get()
        if (activeSet && currQuestion < activeSet.questions.length - 1) {
            set({ currQuestion: currQuestion + 1 })
        }
    },

    prevQuestion: () => {
        const { currQuestion } = get()
        if (currQuestion > 0) {
            set({ currQuestion: currQuestion - 1 })
        }
    },
}))
