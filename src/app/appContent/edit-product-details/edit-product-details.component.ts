import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-product-details',
  templateUrl: './edit-product-details.component.html',
  styleUrls: ['./edit-product-details.component.css'],
})
export class EditProductDetailsComponent implements OnInit {
  productDetails: any;
  name: any;
  price: any;
  description: any;
  constructor(
    public dialogRef: MatDialogRef<EditProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.productDetails = this.data;
    this.name = this.productDetails.name;
    console.log(this.name);
    this.price = this.productDetails.price;
    this.description = this.productDetails.product_info;
  }
  closeDialog() {
    this.dialogRef.close();
    console.log(this.dialogRef.close());
  }
  submitDetails(updateDetails) {
    console.log(updateDetails);
  }
}
