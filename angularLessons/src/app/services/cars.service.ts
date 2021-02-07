import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICar} from '../interfaces';
import {URL} from '../config';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private httpClient: HttpClient) { }
  id: number;
  getAllCars(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(URL.cars);
  }
  addCar(car: ICar): Observable<ICar> {
    this.getAllCars().subscribe(value => {
      this.id = value.length + 1;
    });
    return this.httpClient.post<ICar>(URL.cars, {id: this.id, ...car});
  }
}
