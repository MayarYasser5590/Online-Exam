import { Component, inject } from '@angular/core';
import { Question } from '../../interfaces/questions/questions.interface';
import { QuestionsService } from '../../services/questions/questions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.html',
  styleUrl: './questions.scss',
})
export class Questions {
  private readonly questionService = inject(QuestionsService);
  private readonly activatedroute = inject(ActivatedRoute);

  questions: Question[] = [];
  currentIndex = 0;
  selectedAnswers: Record<string, string> = {};
  showResults = false;

  ngOnInit(): void {
    const examId = this.activatedroute.snapshot.paramMap.get('examId')!;
    this.loadQuestions(examId);
  }

  loadQuestions(examId: string) {
    this.questionService.getAllQuestionsOnExam(examId).subscribe({
      next: (res) => {
        this.questions = res.questions;
      },
      error: (err) => console.log(err)
    });
  }

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  get progress() {
    return ((this.currentIndex + 1) / this.questions.length) * 100;
  }

  get correctCount() {
    let count = 0;
    for (let q of this.questions) {
      if (this.selectedAnswers[q._id] === q.correct) {
        count++;
      }
    }
    return count;
  }

  selectAnswer(questionId: string, answerKey: string) {
    this.selectedAnswers[questionId] = answerKey;
  }

  next() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    } else {
      this.showResults = true;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  restart() {
    this.currentIndex = 0;
    this.selectedAnswers = {};
    this.showResults = false;
  }



}
