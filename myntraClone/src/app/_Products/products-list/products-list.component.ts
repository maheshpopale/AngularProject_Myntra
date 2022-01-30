import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
products:any[]=[];
  constructor(private productService:ProductsService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts()
  {
    this.productService.getProducts().subscribe(data=>{
      this.products=data;
      console.log(this.products);
      this.products.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.productPrice})
      })
    });
  }
  addtoCart(product:any){
     this.cartService.addtoCart(product);
  }
}
