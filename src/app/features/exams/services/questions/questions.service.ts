import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DASHBOARD_CONFIG } from '../../../dashboard/dashboard-config';
import { HttpClient } from '@angular/common/http';
import { QuestionsResponse } from '../../interfaces/questions/questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
 private readonly httpClient = inject(HttpClient) 
 private readonly configDashboard = inject(DASHBOARD_CONFIG);
 private readonly baseUrl = this.configDashboard.apiUrl

  getAllQuestionsOnExam(examId: string): Observable<QuestionsResponse> {
  return this.httpClient.get<QuestionsResponse>(`${this.baseUrl}/questions?exam=${examId}`);
}

}
