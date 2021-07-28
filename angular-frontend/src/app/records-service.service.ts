import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Records } from './records';

@Injectable({
  providedIn: 'root',
})
export class RecordsServiceService {
  private baseURL = 'http://localhost:8080/api/v1/records';

  constructor(private httpClient: HttpClient) {}

  getRecordsList(): Observable<Records[]> {
    return this.httpClient.get<Records[]>(`${this.baseURL}`);
  }

  createRecords(records: Records): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, records);
  }

  getRecordsById(aid: number): Observable<Records> {
    return this.httpClient.get<Records>(`${this.baseURL}/${aid}`);
  }

  updateRecords(aid: number, records: Records): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${aid}`, records);
  }

  deleteRecords(aid: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${aid}`);
  }
}
