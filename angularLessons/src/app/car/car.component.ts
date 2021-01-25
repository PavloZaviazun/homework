import {Component, Input, OnInit} from '@angular/core';
import {ICars} from '../../interfaces/cars.Interface';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }
  @Input()
  car: ICars;
  ngOnInit(): void {
  }

}
