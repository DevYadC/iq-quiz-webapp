import { ProblemSet } from "./types";
import { criticalThinking } from "./questionBank/critical";
import { verbalComprehension } from "./questionBank/verbal";

export const problemSets: ProblemSet[] = [
    { setName: 'Critical Thinking', questions: criticalThinking },
    { setName: 'Verbal Comprehension', questions: verbalComprehension },
]

console.log("sup");