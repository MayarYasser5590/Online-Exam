export interface AllExamResponse {
  message: string;
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
  };
  exams: AllExams[];
}

export interface AllExams {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
}
