import { Injectable, signal } from '@angular/core';
import { AllExams } from '../../../exams/interfaces/exams/exams.interface';

@Injectable({
  providedIn: 'root'
})
export class ExamsSelectedService {

  private selectedExam = signal<AllExams | null>(null);

  setExam(exam: AllExams) {
    this.selectedExam.set(exam);
  }

  getExam() {
    return this.selectedExam();
  }

  examSignal = this.selectedExam;
}
