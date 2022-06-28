import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class OrderService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient){}

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiServerUrl}/order/all`);
  }

  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiServerUrl}/order/add`, order);
  }
}