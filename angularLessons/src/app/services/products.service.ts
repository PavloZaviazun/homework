import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products');
  }
}
