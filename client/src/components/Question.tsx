import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button';

import { useQuizStore } from '../store'

export default function Question() {
  const { activeSet, currQnIdx, userAnswers, setUserAnswers, nextQuestion, prevQuestion, } = useQuizStore()

  if (!activeSet) return null

  const currentQ = activeSet.questions[currQnIdx]

  return (
    <FormControl>
      <FormLabel id="question-label">{currentQ.question}</FormLabel>
      <RadioGroup name="quiz-options">
        {currentQ.options.map((opt, idx) => (
          <FormControlLabel
            key={idx}
            control={
              <Radio
                checked={userAnswers[currQnIdx] === idx}
                onChange={() => {
                  setUserAnswers(idx)
                  // log the up-to-date answers array:
                  console.log(useQuizStore.getState().userAnswers)
                }}
              />
            }
            label={opt}
          />
        ))}
      </RadioGroup>

      {currQnIdx != 0 && <Button variant="contained" onClick={() => prevQuestion()}>previous</Button>}
      {currQnIdx === activeSet.questions.length - 1
        ? <Button variant="contained">Submit</Button>
        : <Button variant="contained" onClick={nextQuestion}>Next Question</Button>
      }

    </FormControl>
  )
}
