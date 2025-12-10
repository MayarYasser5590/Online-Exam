import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DASHBOARD_CONFIG } from '../../dashboard-config';
import { AllExamResponse } from '../../interfaces/exams/exams-interface';

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
