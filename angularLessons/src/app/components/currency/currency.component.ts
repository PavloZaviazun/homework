import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../../services';
import {ICurrency} from '../../intefaces';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currency: ICurrency[];
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrencyArray().subscribe(value => {
      this.currency = value;
    });
  }

}
