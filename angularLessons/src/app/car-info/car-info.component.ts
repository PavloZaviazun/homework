import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {cars} from '../bd/dataBase';
import {ICars} from '../interfaces/cars.Interface';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
  cars = cars;
  car: ICars;
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(search => {
      this.cars.filter(value => {
        if (value.id === +search.id) {
          this.car = value;
        }
      });
    });
  }

}
