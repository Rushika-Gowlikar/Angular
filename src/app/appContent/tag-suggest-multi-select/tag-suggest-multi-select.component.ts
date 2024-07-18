import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pp-tag-suggest',
  templateUrl: './tag-suggest-multi-select.component.html',
  styleUrls: ['./tag-suggest-multi-select.component.css'],
})
export class TagSuggestMultiSelectComponent implements OnInit {
  @Input() list: any[];
  showDropDown: boolean;
  unique: any[];
  checkedList: any[];
  allCheck: any[];
  finalVal1: any[];
  finalVal2: any[];
  constructor() {}

  ngOnInit(): void {
    if (this.unique != null) {
      this.unique;
    } else if (this.unique == null) {
      this.unique = [];
    }
  }
  getSelectedValue(status: Boolean, value: string) {
    if (status) {
      if (value === 'Select All' && status === true) {
        this.checkedList = [];
        this.allCheck = [];
        for (var i = 0; i < this.list.length; i++) {
          this.list[i].checked = true;
          this.allCheck.push(this.list[i].name);
          // this.unique = this.allCheck;
          // console.log(this.unique);
        }
      } else {
        if (status == true) {
          this.allCheck = [];
          if (this.checkedList && this.checkedList.length) {
            var valuePresent = false;
            for (var i = 0; i < this.checkedList.length; i++) {
              if (value === this.checkedList[i]) {
                valuePresent = true;
              }
            }
            if (!valuePresent) {
              this.checkedList.push(value);
            }
          } else {
            this.checkedList.push(value);
          }
        }
      }
    } else {
      if (value === 'Select All' && status === false) {
        // this.checkedList = [];
        for (var i = 0; i < this.list.length; i++) {
          this.list[i].checked = false;
          // this.allCheck.pop();
        }
        this.allCheck = [];
        this.checkedList = [];
      } else {
        if (this.allCheck && this.allCheck.length) {
          this.checkedList = [];
          for (var i = 0; i < this.allCheck.length; i++) {
            if (this.allCheck[i] !== value) {
              this.checkedList.push(this.allCheck[i]);
            }
          }
        } else {
          if (this.checkedList.length) {
            var index = this.checkedList.indexOf(value);
            this.checkedList.splice(index, 1);
          }
        }
        this.allCheck = [];
      }
    }
    if (this.allCheck && this.allCheck.length) {
      this.finalVal1 = this.allCheck;
      if (value === 'Select All') {
        var removeAll = this.finalVal1.indexOf(value);
        this.finalVal1.splice(removeAll, 1);
      }
    }
    if (this.checkedList) {
      this.finalVal2 = this.checkedList;
    }
    this.finalVal1 = this.allCheck.filter(
      (o) => this.checkedList.indexOf(o) === -1
    );
    this.finalVal2 = this.checkedList.filter(
      (o) => this.allCheck.indexOf(o) === -1
    );
    this.unique = this.finalVal1.concat(this.finalVal2);

    console.log(this.unique.length);
    if (this.unique.length === 4) {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].name === 'Select All') {
          this.list[i].checked = true;
        }
      }
    } else if (this.unique.length < 4) {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].name === 'Select All') {
          this.list[i].checked = false;
        }
      }
    }
  }
}
