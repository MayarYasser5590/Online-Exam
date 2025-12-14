import { Exam } from './../../../../../../.history/src/app/features/dashboard/interfaces/exams/exams-interface_20251210204813';
import { Component, inject } from '@angular/core';
import { DashboardHeader } from "../../layout/dashboard-header/dashboard-header";
import { DashboardPagesContainer } from "../../shared/dashboard-pages-container/dashboard-pages-container";
import { Back } from "../../shared/back/back";
import { AllExams } from '../../interfaces/exams/exams-interface';
import { ExamsService } from '../../services/Exams/exams.service';
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
