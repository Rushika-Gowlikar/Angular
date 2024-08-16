import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-table-row',
  templateUrl: './add-table-row.component.html',
  styleUrls: ['./add-table-row.component.css'],
})
export class AddTableRowComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddTableRowComponent>) {}
  name: string;
  price: number;
  description: string;
  ngOnInit(): void {}
  closeDialog() {
    this.dialogRef.close();
  }
}
