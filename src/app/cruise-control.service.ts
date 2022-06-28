import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CruiseControl } from './cruiseControl';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CruiseControlService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient){}

  public getCruiseControls(): Observable<CruiseControl[]> {
    return this.http.get<CruiseControl[]>(`${this.apiServerUrl}/cruiseControl/all`);
  }

  public addCruiseControl(cruiseControl: CruiseControl): Observable<CruiseControl> {
    return this.http.post<CruiseControl>(`${this.apiServerUrl}/cruiseControl/add`, cruiseControl);
  }

}
