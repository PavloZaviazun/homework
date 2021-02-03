import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICar} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }
  getAllCars(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>('');
  }
  addCar(): Observable<ICar> {
    return this.httpClient.post<ICar>('');
  }
}
