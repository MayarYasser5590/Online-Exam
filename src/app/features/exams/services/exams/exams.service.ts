import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal} from '@angular/core';
import { Observable } from 'rxjs';
import { AllExamResponse } from '../../interfaces/exams/exams.interface';
import { DASHBOARD_CONFIG } from '../../../dashboard/dashboard-config';

@Injectable({
  providedIn: 'root',
})
export class ExamsService {
private readonly httpClient = inject(HttpClient) 
 private readonly configDashboard = inject(DASHBOARD_CONFIG);
 private readonly baseUrl = this.configDashboard.apiUrl;
 private examTitle = signal<string | null>(null);

getAllExams():Observable<AllExamResponse>{
  return this.httpClient.get<AllExamResponse>(`${this.baseUrl}/exams`)
  }

  setExamTitle(title: string) {
    this.examTitle.set(title);
  }

  getExamTitle() {
    return this.examTitle();
  }

  examTitleSignal = this.examTitle;

}
