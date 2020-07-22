import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductApiResponse } from '../model/product-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVICE_URL: string = "http://localhost:6060/springboot-restapi/product";

  constructor(private http: HttpClient) {
   }

   getAllProducts(): Observable<ProductApiResponse> {
     return this.http.get<ProductApiResponse>(this.SERVICE_URL + '/all');    
   }
}
