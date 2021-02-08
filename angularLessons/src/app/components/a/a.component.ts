import {Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {CounterService} from '../../services';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() counter: number;
  text = 'Stroka teksta';
  constructor(private counterService: CounterService) {
    console.log('constructor A');
  }
  incrementCounter(): void {
    this.counterService.changeCounter(1);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges A');
  }
  ngOnInit(): void {
    console.log('onInit A');
  }
  ngDoCheck(): void {
    console.log('doCheck A');
  }
  ngOnDestroy(): void {
    console.log('onDestroy A');
  }
}
