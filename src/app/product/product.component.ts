import { Component, OnInit } from '@angular/core';
import { DataSource } from '../data.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private dataSource:DataSource;
  public products:Product[];
  public product:Product;

  constructor() {
    this.dataSource=new DataSource();
    this.products=new Array<Product>();

    this.dataSource.getProducts().forEach(p=>this.products.push(p));
    this.product= this.dataSource.getProductsById(1);
  }

  username="username ahmetikrdg";

  Console(){
    console.log(this.username);
  }

  ngOnInit(): void {
  }


}
