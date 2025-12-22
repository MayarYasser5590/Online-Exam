import { Component ,EventEmitter,inject,input,Input, Output } from '@angular/core';
import { Question } from '../../../../interfaces/questions/questions.interface';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-questions',
  imports: [ProgressBarModule, RadioButtonModule, ButtonModule ,FormsModule , KnobModule],
  templateUrl: './questions.html',
  styleUrl: './questions.scss',
})
export class Questions {
  @Input() question!: Question;
  @Input() examTitle = '';
  @Input() diplomaTitle: string | null = '';
  @Input() currentIndex = 0;
  @Input() total = 0;
  @Input() progress = 0;
  @Input() selectedAnswer?: string;

  @Output() answerSelected = new EventEmitter<string>();
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
  @Input() totalSeconds = 0;
  @Input() remainingSeconds = 0;
  @Input() remainingTime = '';

  get isWarningTime(): boolean {
  return this.remainingSeconds <= 30;
}


}
