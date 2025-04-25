import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { problemSets } from '../problemSets'
import { useQuizStore } from '../store' // adjust path as needed

export default function SelectQuiz() {
    const selectSet = useQuizStore((state) => state.selectSet)

    return (
        <ButtonGroup variant="contained" aria-label="Basic button group">
            {problemSets.map((set) => (
                <Button key={set.setName} onClick={() => selectSet(set)}>
                    {set.setName}
                </Button>
            ))}
        </ButtonGroup>
    )
}
