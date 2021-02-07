import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../../services';
import {ICar} from '../../../interfaces';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];
  constructor(private carsService: CarsService) { }
  ngOnInit(): void {
    this.carsService.getAllCars().subscribe(value => {
      this.cars = value;
    });
  }

}
