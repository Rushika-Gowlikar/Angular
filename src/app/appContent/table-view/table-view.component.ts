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
  products:any;
  constructor(private service: AppContentService) {}

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
    this.service.deleteContent(data.id).subscribe((data) => {});
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
    this.service.getProducts().subscribe((data)=>{
      this.products =data;
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
}
