import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  constructor(private datePipe: DatePipe) { }
  dateString = new BehaviorSubject(this.datePipe.transform(new Date(), 'yyyyMMdd'));
  getDateString(): BehaviorSubject<string> {
    return this.dateString;
  }
  changeDateString(currentDate): void {
    this.dateString.next(this.datePipe.transform(currentDate, 'yyyyMMdd'));
  }
}
