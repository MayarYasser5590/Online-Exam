import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-exam-header',
  imports: [],
  templateUrl: './exam-header.html',
  styleUrl: './exam-header.scss',
})
export class ExamHeader {
  title = signal('');
  questions = signal('');
  duration = signal('');

  @Input() set titleInput(title: string) {
    this.title.set(title);
  }

  @Input() set questionsInput(quesNum: string) {
    this.questions.set(quesNum);
  }

  @Input() set durationInput(time: string) {
    this.duration.set(time);
  }

}
