import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {CurrencyService, DateService} from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dateString: string;
  currentDate: Date;
  constructor(private datePipe: DatePipe, private dateService: DateService, private currencyService: CurrencyService) {
    this.currentDate = new Date();
  }
  ngOnInit(): void {
    this.dateString = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');
    this.currencyService.getCurrency(this.dateService.getDateString().getValue()).subscribe(value => {
      this.currencyService.setCurrencyArray(value);
    });
  }

  changeDate(): void {
    this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() - 1));
    this.dateService.changeDateString(this.currentDate);
    this.ngOnInit();
  }
}
