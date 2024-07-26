import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppContentService {
  constructor() {}
  added: any = [];
  setTodos(todo) {
    this.added.push(todo);
  }
  addedTodos() {
    return this.added;
  }
}
