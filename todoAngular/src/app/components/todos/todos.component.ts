import { Component, OnInit } from '@angular/core';
import {ITodo} from '../../interfaces';
import {Router} from '@angular/router';
import {TodosService} from '../../services';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Observable<ITodo[]>;
  id: string;
  constructor(private router: Router,
              private todosService: TodosService) {
    this.id = this.router.url.split('list/')[1];
  }
  search = new FormControl('');
  formSearch = new FormGroup( {
    search : this.search
  });

  ngOnInit(): void {
    this.todosService.getTodos(this.id);
    this.todos = this.todosService.entities;
  }

  sendData(): void {
    if (this.formSearch.getRawValue().search === '') {
      this.todosService.getTodos(this.id);
    } else {
      this.todosService.searchTodos(this.id, this.formSearch.getRawValue().search);
    }
  }
}
