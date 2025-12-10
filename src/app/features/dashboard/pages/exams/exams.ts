import { Component } from '@angular/core';
import { DashboardHeader } from "../../layout/dashboard-header/dashboard-header";
import { DashboardPagesContainer } from "../../shared/dashboard-pages-container/dashboard-pages-container";
import { Back } from "../../shared/back/back";

@Component({
  selector: 'app-exams',
  imports: [DashboardPagesContainer, DashboardHeader, Back],
  templateUrl: './exams.html',
  styleUrl: './exams.scss',
})
export class Exams {

}
