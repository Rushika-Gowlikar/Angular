import { Component, OnInit } from '@angular/core';
import { AppContentService } from '../app-content.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProductDetailsComponent } from '../edit-product-details/edit-product-details.component';
import { AddTableRowComponent } from '../add-table-row/add-table-row.component';

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
  products: any;
  constructor(private service: AppContentService, public dialog: MatDialog) {}

  ngOnInit(): void {
    // this.getTableDetails();
    this.loadProducts();
  }
  getfilterData() {
    this.products = this.details.filter((p: any) => {
      return p.name.toLowerCase().includes(this.searchInput.toLowerCase());
    });
  }
  deleteData(data) {
    let remove = this.products.indexOf(data);
    this.products.splice(remove, 1);
  }
  sort(order: any) {
    if (order == 'asc') {
      this.products.sort((p1: any, p2: any) => {
        return p1.name > p2.name ? 1 : -1;
      });
    } else if (order == 'dsc') {
      this.products.sort((p1: any, p2: any) => {
        return p1.name > p2.name ? -1 : 1;
      });
    }
  }
  // getTableDetails() {
  //   this.service.getContent().subscribe((data) => {
  //     this.storedData = data;
  //     this.details = data;
  //   });
  // }

  loadProducts() {
    this.service.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.details = data;
      }
      // products =>  console.log(products),
      // error => console.error('Error loading products', error)
    );
  }

  // addProduct() {
  //   const newProduct = { name: 'New Product', price: 100 };
  //   this.service.createProduct(newProduct).subscribe(
  //     product => this.products.push(product),
  //     error => console.error('Error adding product', error)
  //   );
  // }

  // deleteProduct(id: number) {
  //   this.service.deleteProduct(id).subscribe(
  //     () => this.products = this.products.filter(p => p.id !== id),
  //     error => console.error('Error deleting product', error)
  //   );
  // }
  // editDetails(data) {
  //   const editProduct = {
  //     name: data.name,
  //     price: data.price,
  //     product_info: data.product_info,
  //   };
  //   this.service
  //     .updateProduct(data.id, editProduct)
  //     .subscribe
  //     // product => this.products.push(product),
  //     // error => console.error('Error adding product', error)
  //     ();
  // }

  openDialog(editDetails) {
    let dialogRef = this.dialog.open(EditProductDetailsComponent, {
      width: '550px',
      height: '550px',
      data: editDetails,
    });
  }
  openAddDetails() {
    let dialogRef = this.dialog.open(AddTableRowComponent, {
      width: '550px',
      height: '550px',
    });
  }
}
