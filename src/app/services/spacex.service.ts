import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch.model';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.apiUrl);
  }

  getLaunchesByYear(year: string): Observable<Launch[]> {
    const url = `https://api.spacexdata.com/v3/launches?launch_year=${year}`;
    return this.http.get<Launch[]>(url);
  }

  getLaunchByFlightNumber(id: string): Observable<Launch> {
    const url = `https://api.spacexdata.com/v3/launches/${id}`;
    return this.http.get<Launch>(url);
  }  
}
