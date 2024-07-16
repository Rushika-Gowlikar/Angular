import { Component, OnInit } from '@angular/core';
import * as BOOKJSON from '../../../app/items.json';
@Component({
  selector: 'app-book-reader',
  templateUrl: './book-reader.component.html',
  styleUrls: ['./book-reader.component.css'],
})
export class BookReaderComponent implements OnInit {
  list: any;
  constructor() {}

  ngOnInit() {
    this.list = BOOKJSON['default'].list.values;
  }
}
