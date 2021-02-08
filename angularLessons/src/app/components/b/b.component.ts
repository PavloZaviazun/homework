import { Component, OnInit } from '@angular/core';
import {CounterService} from '../../services';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  decrementCounter(): void {
    this.counterService.changeCounter(-1);
  }
}
