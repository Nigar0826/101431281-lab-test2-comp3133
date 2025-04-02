import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private baseUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) {}

  getAllMissions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/launches`);
  }

  getMissionDetails(flightNumber: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/launches/${flightNumber}`);
  }

  getMissionsByYear(year: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/launches?launch_year=${year}`);
  }
}
