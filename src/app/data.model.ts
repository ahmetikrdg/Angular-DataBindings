import {Product} from "./product.model";

export class DataSource{
  private products:Product[];
  constructor() {
    this.products=new Array<Product>(
      new Product(1,"Vestel","Açıklama 1"),
      new Product(2,"Apple","Açıklama 2"),
      new Product(3,"Xiomi","Açıklama 3"),
      new Product(4,"Ürün 4","Açıklama 4"),
      new Product(5,"Ürün 5","Açıklama 5")
    );
  }

  getProducts():Product[]{
    return this.products;
  }

  getProductsById(id:number){
    return this.products.find(i=>i.id==id);
  }
}
