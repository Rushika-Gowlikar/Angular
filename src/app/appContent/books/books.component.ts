import { Component, OnInit } from '@angular/core';
import * as BOOKJSON from '../../../app/items.json';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  list: any;
  outputValue: any;
  constructor() {}

  ngOnInit() {
    this.list = BOOKJSON['default'].list.values;
    console.log(this.list);
  }
  output(value) {
    this.outputValue = value.toString();
    console.log(this.outputValue);
  }
}
