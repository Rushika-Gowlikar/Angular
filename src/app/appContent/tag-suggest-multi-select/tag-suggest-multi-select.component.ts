import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pp-tag-suggest',
  templateUrl: './tag-suggest-multi-select.component.html',
  styleUrls: ['./tag-suggest-multi-select.component.css'],
})
export class TagSuggestMultiSelectComponent implements OnInit {
  @Input() list: any[];
  showDropDown: boolean;
  constructor() {}

  ngOnInit(): void {
    this.list.forEach((val) => {
      console.log(val.checked);
    });
  }
  getSelectedValue(status: Boolean, value: string) {
    if (status) {
    }
  }
}
