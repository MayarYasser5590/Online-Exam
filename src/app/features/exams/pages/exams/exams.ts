import { Component } from '@angular/core';
import { DashboardPagesContainer } from '../../../dashboard/shared/dashboard-pages-container/dashboard-pages-container';
import { DashboardHeader } from '../../../dashboard/layout/dashboard-header/dashboard-header';
import { Back } from '../../../dashboard/shared/back/back';

@Component({
  selector: 'app-exams',
  imports: [DashboardPagesContainer, DashboardHeader, Back],
  templateUrl: './exams.html',
  styleUrl: './exams.scss',
})
export class Exams {

}
