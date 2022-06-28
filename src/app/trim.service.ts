import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trim } from './trim';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrimService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

   public getTrims(): Observable<Trim[]> {
    return this.http.get<Trim[]>(`${this.apiServerUrl}/trim/all`);
  }

  public addTrim(trim: Trim): Observable<Trim> {
    return this.http.post<Trim>(`${this.apiServerUrl}/trim/add`, trim);
  }
}