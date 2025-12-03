import { Component } from '@angular/core';
import { DashboardHeader } from "../../layout/dashboard-header/dashboard-header";
import { DashboardPagesContainer } from "../../shared/dashboard-pages-container/dashboard-pages-container";
import { Back } from "../../shared/back/back";
import { ExamHeader } from "./components/ui/exam-header/exam-header";

@Component({
  selector: 'app-exams',
  imports: [DashboardPagesContainer, DashboardHeader, Back, ExamHeader],
  templateUrl: './exams.html',
  styleUrl: './exams.scss',
})
export class Exams {

}
