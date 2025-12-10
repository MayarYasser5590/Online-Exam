import { Component, inject } from '@angular/core';
import { DashboardHeader } from "../../layout/dashboard-header/dashboard-header";
import { DashboardPagesContainer } from "../../shared/dashboard-pages-container/dashboard-pages-container";
import { Back } from "../../shared/back/back";
import { AllExamResponse } from '../../interfaces/exams/exams-interface';
import { ExamsService } from '../../services/Exams/exams.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exams',
  imports: [DashboardPagesContainer, DashboardHeader, Back],
  templateUrl: './exams.html',
  styleUrl: './exams.scss',
})
export class Exams {
  private readonly diplomaService = inject(ExamsService)
  Exams : AllExamResponse[] = []
  ExamsSubscribe : Subscription = new Subscription();

  
}
