import { Component, OnInit } from '@angular/core';
import { AppContentService } from '../app-content.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
  storedData: any;
  filterProducts: any;
  searchInput: any;
  details: any;

  constructor(private service: AppContentService) {}

  ngOnInit(): void {
    this.getTableDetails();
  }
  getfilterData() {
    this.storedData = this.details.filter((p: any) => {
      return p.title.toLowerCase().includes(this.searchInput.toLowerCase());
    });
  }
  deleteData(data) {
    this.service.deleteContent(data.id).subscribe((data) => {});
  }
  sort(order: any) {
    if (order == 'asc') {
      this.storedData.sort((p1: any, p2: any) => {
        return p1.title > p2.title ? 1 : -1;
      });
    } else if (order == 'dsc') {
      this.storedData.sort((p1: any, p2: any) => {
        return p1.title > p2.title ? -1 : 1;
      });
    }
  }
  getTableDetails() {
    this.service.getContent().subscribe((data) => {
      this.storedData = data;
      this.details = data;
    });
  }
}
