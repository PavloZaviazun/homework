import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ICurrency} from '../intefaces';
import {urls} from '../config';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  currency = new BehaviorSubject<ICurrency[]>([]);
  constructor(private httpClient: HttpClient) {
  }

  getCurrency(dateString): Observable<ICurrency[]> {
    return this.httpClient.get<ICurrency[]>(urls.currencyByDate + dateString + '&json');
  }
  setCurrencyArray(currencyArray): void {
    this.currency.next(currencyArray);
  }
  getCurrencyArray(): BehaviorSubject<ICurrency[]> {
    return this.currency;
  }
}
