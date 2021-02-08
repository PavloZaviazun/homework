import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  private id = new BehaviorSubject(0);
  constructor() { }
  getId(): BehaviorSubject<number> {
    return this.id;
  }
  setId(id): void {
    this.id.next(id);
  }
}
