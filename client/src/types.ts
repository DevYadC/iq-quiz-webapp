
export interface Question {
    question: string;
    options: string[];


}

export interface ProblemSet {
    setName: string;
    questions: Question[];

}