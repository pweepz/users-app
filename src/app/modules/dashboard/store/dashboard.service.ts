import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DashboardItem } from './dashboard-item';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getDashboardItems(): Observable<DashboardItem[]> {
    return this.http.get<DashboardItem[]>('https://jsonplaceholder.typicode.com/users');
  }

  getDashboardItem(id: number): Observable<DashboardItem> {
    return this.http.get<DashboardItem>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
