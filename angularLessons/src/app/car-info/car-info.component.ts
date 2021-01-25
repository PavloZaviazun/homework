import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {cars} from '../../bd/dataBase';
import {ICars} from '../../interfaces/cars.Interface';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
  cars = cars;
  defCar: number;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.defCar = value.id);
    console.log(this.defCar);
  }

  ngOnInit(): void {
    // const her = cars.filter(value => value.id === this.defCar);
  }

}
