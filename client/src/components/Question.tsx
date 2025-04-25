import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button';

import { useQuizStore } from '../store'

export default function Question() {
  const { activeSet, currQuestion, nextQuestion, prevQuestion } = useQuizStore()

  if (!activeSet) return null

  const currentQ = activeSet.questions[currQuestion]

  return (
    <FormControl>
      <FormLabel id="question-label">{currentQ.question}</FormLabel>
      <RadioGroup
        aria-labelledby="question-label"
        name="quiz-options"
      >
        {currentQ.options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={index}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
      {currQuestion != 0 && <Button variant="contained" onClick={() => prevQuestion()}>previous</Button>}
      {currQuestion === activeSet.questions.length - 1
        ? <Button variant="contained">Submit</Button>
        : <Button variant="contained" onClick={nextQuestion}>Next Question</Button>
      }

    </FormControl>
  )
}
