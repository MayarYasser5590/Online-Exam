import { Component, inject } from '@angular/core';
import { DashboardHeader } from '../../../dashboard/layout/dashboard-header/dashboard-header';
import { DashboardPagesContainer } from '../../../dashboard/shared/dashboard-pages-container/dashboard-pages-container';
import { Back } from '../../../dashboard/shared/back/back';
import { ExamsService } from '../../services/exams.service';
import { AllExams } from '../../interfaces/exams/exams';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exams',
  imports: [DashboardPagesContainer, DashboardHeader, Back],
  templateUrl: './exams.html',
  styleUrl: './exams.scss',
})
export class Exams {
  private readonly examsService = inject(ExamsService)
  Exams : AllExams[] = []
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
 ngOnDestroy(): void {
    this.ExamsSubscribe.unsubscribe()
 }
}
