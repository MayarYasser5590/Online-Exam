import { Component, inject } from '@angular/core';
import { DashboardHeader } from '../../../dashboard/layout/dashboard-header/dashboard-header';
import { DashboardPagesContainer } from '../../../dashboard/shared/dashboard-pages-container/dashboard-pages-container';
import { Back } from '../../../dashboard/shared/back/back';
import { ExamsService } from '../../services/exams/exams.service';
import { AllExams } from '../../interfaces/exams/exams.interface';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { ExamsSelectedService } from '../../../questions/services/exams/examsSelected.service';

@Component({
  selector: 'app-exams',
  imports: [DashboardPagesContainer, DashboardHeader, Back, RouterLink],
  templateUrl: './exams.html',
  styleUrl: './exams.scss',
})
export class Exams {
  private readonly examsService = inject(ExamsService)
  Exams : AllExams[] = []
  private readonly router = inject(Router);
  private readonly examsSelected = inject(ExamsSelectedService);
  ExamsSubscribe : Subscription = new Subscription();

  ngOnInit(): void {
   this.getAllDiplomas()
} 

getAllDiplomas(){
  this.ExamsSubscribe = this.examsService.getAllExams().subscribe({
    next:(res)=>{
    this.Exams = res.exams;
    }
  })
}

openExam(examId: string , exam: AllExams) {
  this.examsSelected.setExam(exam);
  this.examsService.setExamTitle(exam.title);
  this.router.navigate(['/exams', examId, 'questions']);
}
 
 ngOnDestroy(): void {
    this.ExamsSubscribe.unsubscribe()
 }
}
