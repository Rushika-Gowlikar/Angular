import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppContentService {
  constructor(private http: HttpClient) {}
  added: any = [];
  setTodos(todo) {
    this.added.push(todo);
  }
  addedTodos() {
    return this.added;
  }

  getMethod() {
    return this.http.get('https://type.fit/api/quotes');
  }
  getContent() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  deleteContent(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}
