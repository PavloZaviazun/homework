import {Component, Input, OnInit} from '@angular/core';
import {ICurrency} from '../../intefaces';

@Component({
  selector: 'app-currency-full',
  templateUrl: './currency-full.component.html',
  styleUrls: ['./currency-full.component.css']
})
export class CurrencyFullComponent implements OnInit {
  @Input() oneCurrency: ICurrency;
  constructor() { }

  ngOnInit(): void {
  }

}
