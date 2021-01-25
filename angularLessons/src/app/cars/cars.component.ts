import { Component, OnInit } from '@angular/core';
import {cars} from '../../data/dataBase';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars = cars;
  constructor() { }

  ngOnInit(): void {
  }

}
