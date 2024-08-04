import { Component, OnInit } from '@angular/core';
import { AppContentService } from '../app-content.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
  storedData: any;

  constructor(private service: AppContentService) {}

  ngOnInit(): void {
    this.service.getContent().subscribe((data) => {
      this.storedData = data;
    });
  }
}
