import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  constructor() { }
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

}
