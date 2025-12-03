import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DASHBOARD_CONFIG } from '../../dashboard-config';

@Injectable({
  providedIn: 'root',
})
export class DiplomasService {
 private readonly httpClient = inject(HttpClient) 
 private readonly configDashboard = inject(DASHBOARD_CONFIG);
 private readonly baseUrl = this.configDashboard.apiUrl;


getAllSubjects():Observable<any>{
  return this.httpClient.get(`${this.baseUrl}/subjects`)
  console.log("Diploma service http:", this.httpClient);

}
}

