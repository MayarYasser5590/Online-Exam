import { Component, computed, inject } from '@angular/core';
import { QuestionsService } from '../../services/questions/questions.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Question } from '../../interfaces/questions/questions.interface';
import { Questions } from "./components/questions/questions";
import { Results } from "./components/results/results";
import { DashboardPagesContainer } from "../../../dashboard/shared/dashboard-pages-container/dashboard-pages-container";
import { DashboardHeader } from "../../../dashboard/layout/dashboard-header/dashboard-header";
import { DiplomasService } from '../../../dashboard/services/diplomas/diplomas.service';
import { Back } from "../../../dashboard/shared/back/back";
import { ExamsSelectedService } from '../../services/exams/examsSelected.service';

@Component({
  selector: 'app-questions-view',
  imports: [Questions, Results, DashboardPagesContainer, DashboardHeader, Back, RouterLink],
  templateUrl: './questions-view.html',
  styleUrl: './questions-view.scss',
})
export class QuestionsView {
  private readonly questionsService = inject(QuestionsService);
  private readonly route = inject(ActivatedRoute);
  diplomaService = inject(DiplomasService)
  diplomaTitle = computed(() => this.diplomaService.diplomaTitleSignal());

  questions: Question[] = [];
  currentIndex = 0;
  selectedAnswers: Record<string, string> = {};
  showResults = false;
  private readonly examsSelected = inject(ExamsSelectedService);
  totalSeconds = 0;
  remainingSeconds = 0;
  private timerId!: any;

  ngOnInit(): void {
    const examId = this.route.snapshot.paramMap.get('examId')!;
    this.loadQuestions(examId);

    const exam = this.examsSelected.getExam();
       if (!exam) {
        console.log("no exam");
        
    return;
  }
    this.totalSeconds = exam.duration * 60;
    this.remainingSeconds = this.totalSeconds;

    this.startTimer();
  }

  loadQuestions(examId: string) {
    this.questionsService.getAllQuestionsOnExam(examId).subscribe({
      next:(res)=>{
      this.questions = res.questions
      },
      error: err => console.error(err)
    });
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

  selectAnswer(questionId: string, answerKey: string) {
    this.selectedAnswers[questionId] = answerKey;
  }

  restart() {
    this.currentIndex = 0;
    this.selectedAnswers = {};
    this.showResults = false;
  }

    get currentQuestion(): Question | null {
    return this.questions[this.currentIndex] ?? null;
  }

  get currentQuestionId(): string {
    return this.currentQuestion?._id ?? '';
  }


  get progress() {
    return ((this.currentIndex + 1) / this.questions.length) * 100;
  }

  get correctCount() { 
    let count = 0; 
    for (let q of this.questions) { 
      if (this.selectedAnswers[q._id] === q.correct) { 
        count++; 
      } } 
      return count; 
    }

    startTimer() {
  this.timerId = setInterval(() => {
    if (this.remainingSeconds > 0) {
      this.remainingSeconds--;
    } else {
      clearInterval(this.timerId);
      this.showResults = true;
    }
  }, 1000);
}


get remainingTime(): string {
  const minutes = Math.floor(this.remainingSeconds / 60);
  const seconds = this.remainingSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

ngOnDestroy() {
  clearInterval(this.timerId);
}


}
