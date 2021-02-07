import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CarsService} from '../../../services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  constructor(private carsService: CarsService, private router: Router, private activatedRoute: ActivatedRoute) { }
  brand = new FormControl('');
  model = new FormControl('');
  year = new FormControl('');
  carForm = new FormGroup({
    brand: this.brand,
    model: this.model,
    year: this.year
  });
  ngOnInit(): void {
  }
  createNew(): void {
    this.carsService.addCar({id: 0, brand: this.brand.value, model: this.model.value, year: +this.year.value}).subscribe(value => {
      this.router.navigate(['cars']);
    });
  }
}
