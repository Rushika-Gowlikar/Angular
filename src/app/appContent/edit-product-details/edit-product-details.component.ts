import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppContentService } from '../app-content.service';
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
  id: any;
  constructor(
    public dialogRef: MatDialogRef<EditProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: AppContentService
  ) {}

  ngOnInit(): void {
    this.productDetails = this.data;
    this.name = this.productDetails.name;
    console.log(this.name);
    this.price = this.productDetails.price;
    this.id = this.productDetails.id;
    this.description = this.productDetails.product_info;
  }
  closeDialog() {
    this.dialogRef.close();
    console.log(this.dialogRef.close());
  }
  submitDetails(id) {
    this.service
      .updateProduct(id, {
        name: this.name,
        price: this.price,
        product_info: this.description,
      })
      .subscribe();
    this.dialogRef.close();
  }
}
