import {Component, Input, OnInit} from '@angular/core';
import {ICar} from '../../interfaces/car.interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }
  @Input() car: ICar;
  ngOnInit(): void {
  }

}
