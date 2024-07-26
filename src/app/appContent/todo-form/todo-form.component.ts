import { Component, OnInit } from '@angular/core';
import { AppContentService } from '../app-content.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  constructor(private service: AppContentService) {}
  todo: any = [];
  ngOnInit(): void {}
  add(task) {
    this.todo.push(task);

    console.log(this.todo);
    this.service.setTodos(this.todo);
  }
}
