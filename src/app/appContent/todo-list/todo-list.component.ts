import { Component, OnInit } from '@angular/core';
import { AppContentService } from '../app-content.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todo: any = [];
  constructor(private service: AppContentService) {}

  ngOnInit(): void {
    this.todo = this.service.addedTodos();
  }
}
