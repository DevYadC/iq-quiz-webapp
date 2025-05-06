
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useProblemSets } from '../hooks/useProblemSets'
import { useQuizStore } from '../store'

export default function SelectQuiz() {
    const selectSet = useQuizStore((s) => s.selectSet)
    const { data: problemSets = [], isLoading, error } = useProblemSets()

    if (isLoading) {
        return <div>Loading quizzes…</div>
    }
    if (error) {
        return <div>Error loading quizzes: {error.message}</div>
    }

    return (
        <ButtonGroup variant="contained" aria-label="Quiz selector">
            {problemSets.map((set) => (
                <Button key={set.setName} onClick={() => selectSet(set)}>
                    {set.setName}
                </Button>
            ))}
        </ButtonGroup>
    )
}
