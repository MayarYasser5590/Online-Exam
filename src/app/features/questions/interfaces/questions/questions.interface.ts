export interface QuestionAnswer {
  answer: string;
  key: string;
}

export interface QuestionExam {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
}

export interface Question {
  _id: string;
  question: string;
  type: string;               
  correct: string;            
  subject: string | null;
  createdAt: string;
  exam: QuestionExam;
  answers: QuestionAnswer[];  
}

export interface QuestionsResponse {
  message: string;
  questions: Question[];
}
