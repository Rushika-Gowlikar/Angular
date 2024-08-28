import { Component, OnInit } from '@angular/core';
import * as BOOKJSON from '../../../app/items.json';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  list: any;
  constructor() {}

  ngOnInit() {
    this.list = BOOKJSON['default'].list.values;
    console.log(this.list);
  }
}
