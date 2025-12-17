import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllExamResponse } from '../../interfaces/exams/exams';
import { DASHBOARD_CONFIG } from '../../../dashboard/dashboard-config';

@Injectable({
  providedIn: 'root',
})
export class ExamsService {
  private readonly httpClient = inject(HttpClient) 
 private readonly configDashboard = inject(DASHBOARD_CONFIG);
 private readonly baseUrl = this.configDashboard.apiUrl;

getAllExams():Observable<AllExamResponse>{
  return this.httpClient.get<AllExamResponse>(`${this.baseUrl}/exams`)
  }

}
