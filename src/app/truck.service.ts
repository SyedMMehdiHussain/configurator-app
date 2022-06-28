import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Truck } from './truck';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getTrucks(): Observable<Truck[]> {
    return this.http.get<Truck[]>(`${this.apiServerUrl}/truck/all`);
  }

  public addTruck(truck: Truck): Observable<Truck> {
    return this.http.post<Truck>(`${this.apiServerUrl}/truck/add`, truck);
  }


}
