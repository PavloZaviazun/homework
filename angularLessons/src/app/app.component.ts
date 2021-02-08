import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CounterService} from './services';
import {AComponent} from './components/a/a.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(AComponent) aVariables: AComponent;
  constructor(private counterService: CounterService) {
  }
  title = 'angularLessons';
  counter: number;

  ngOnInit(): void {
    this.counterService.getCounter().subscribe(value => {
      this.counter = value;
    });
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit App');
    this.aVariables.text = 'new text';
  }
}
