import { create } from 'zustand'
import type { ProblemSet } from './types'

interface QuizState {
    activeSet: ProblemSet | null
    userAnswers: number[]
    currQnIdx: number
    selectSet: (probSet: ProblemSet) => void
    setUserAnswers: (answer: number) => void
    nextQuestion: () => void
    prevQuestion: () => void
}

export const useQuizStore = create<QuizState>((set, get) => ({
    // state
    activeSet: null,
    userAnswers: [],
    currQnIdx: 0,

    // actions
    selectSet: (probSet) =>
        set({
            activeSet: probSet,
            currQnIdx: 0,
            userAnswers: Array(probSet.questions.length).fill(-1),
        }),

    setUserAnswers: (answer) => {
        const { currQnIdx, userAnswers } = get()
        const updated = [...userAnswers]
        updated[currQnIdx] = answer
        set({ userAnswers: updated })
    },

    nextQuestion: () => {
        const { currQnIdx, activeSet } = get()
        if (activeSet && currQnIdx < activeSet.questions.length - 1) {
            set({ currQnIdx: currQnIdx + 1 })
        }
    },

    prevQuestion: () => {
        const { currQnIdx } = get()
        if (currQnIdx > 0) {
            set({ currQnIdx: currQnIdx - 1 })
        }
    },
}))

export interface ChartState {
    selectedScore: string;
    setSelectedScore: (score: string) => void;
}

export const useChartStore = create<ChartState>((set) => ({
    selectedScore: '',
    setSelectedScore: (score) => set({ selectedScore: score }),
}));
