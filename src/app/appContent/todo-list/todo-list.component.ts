import { Component, OnInit } from '@angular/core';
import { AppContentService } from '../app-content.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoFormComponent implements OnInit {
  quotes: any;

  constructor(private service: AppContentService) {}
  todo: any = [];
  ngOnInit(): void {
    this.getQuots();
  }
  getQuots() {
    this.service.getMethod().subscribe((data) => {
      this.quotes = data['products'];
      console.log(this.quotes);
    });
  }
}
