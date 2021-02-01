import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {cars} from './database/db';
import {ICar} from './interfaces/car.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLessons';
/*  user = {name: 'Pasha', age: 29};
  checkForm(myForm: NgForm): void {
    console.log(myForm);
  }*/

/*  name = new FormControl('', [Validators.required, Validators.minLength(5)]);
  age = new FormControl('29');

  myForm = new FormGroup({
    name: this.name, age: this.age
  });
  checkInfo(): void {
    console.log(this.myForm);
  }*/
  cars: ICar[] = cars;

  model = new FormControl('', [Validators.required]);
  year = new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}')]);
  horsepower = new FormControl('', [Validators.required, Validators.pattern('[0-9]{2,4}')]);
  color = new FormControl('', [Validators.required]);
  owner = new FormControl('', Validators.required);
  carForm = new FormGroup({
    model: this.model,
    year: this.year,
    horsepower: this.horsepower,
    color: this.year,
    owner: this.owner
  });

  addToList(): void {
    const carNew: ICar = {
      model: this.model.value,
      year: this.year.value,
      horsepower: this.horsepower.value,
      color: this.color.value,
      owner: this.owner.value
    };
    cars.push(carNew);

  }
}
