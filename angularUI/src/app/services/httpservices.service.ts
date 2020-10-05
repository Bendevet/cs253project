import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderResponse } from '../Models/OrderResponse/orderesponse';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  emitter = new EventEmitter<String>();
  
  constructor(public http: HttpClient) {}



  trackOrder(orderNumber: string):Observable<OrderResponse>{
    return this.http.get<OrderResponse>(`http://10.0.0.2:8080/api/orders/track/${orderNumber}`);
  }


}
