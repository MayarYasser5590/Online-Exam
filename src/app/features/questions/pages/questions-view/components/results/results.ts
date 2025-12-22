import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../../../interfaces/questions/questions.interface';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-results',
  imports: [ChartModule, CardModule, TagModule, ButtonModule, ProgressBarModule, RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class Results {
 @Input() questions: Question[] = [];
 @Input() selectedAnswers: Record<string, string> = {};
 @Input() correctCount = 0;
 @Input() examTitle = '';
 @Input() diplomaTitle: string | null = '';
 @Input() currentIndex = 0;
 @Input() total = 0;
 @Input() progress = 0;


 @Output() restart = new EventEmitter<void>();

  get chartData() {
    return {
      labels: ['Correct', 'Incorrect'],
      datasets: [
        {
          data: [
            this.correctCount,
            this.questions.length - this.correctCount
          ],
          backgroundColor: ['#22c55e', '#ef4444'],
          borderWidth: 0,
          hoverOffset: 6
        }
      ]
    };
  }

chartOptions = {
  cutout: '70%',
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true
    }
  }
};

  isCorrect(q: Question) {
    return this.selectedAnswers[q._id] === q.correct;
  }

  getCorrectAnswer(q: Question) {
    return q.answers.find(a => a.key === q.correct)?.answer;
  }

   getSelectedAnswer(q: Question) {
    return this.selectedAnswers[q._id];
  }
}
