import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject<number>(0);
  constructor() { }
  getCounter(): BehaviorSubject<number> {
    return this.counter;
  }
  changeCounter(val: number): void {
    this.counter.next(this.counter.getValue() + val);
  }
}
