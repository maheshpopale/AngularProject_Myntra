import { Component, ElementRef, OnInit } from '@angular/core';
import { of, toArray } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products:any[]=[];
public grandTotal:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
   this.cartService.getProductList().subscribe(data=>{
     this.products=data;
    console.log(this.products);
    this.products.forEach(element=>{
      console.log(element.product);
        
    
    })
     this.grandTotal=this.cartService.getTotalPrice();
   });
   }
   removeItem(item:any){
     this.cartService.removeCartItem(item);
   }
   emptyCart(){
     this.cartService.removeAllCart();
   }
  
   
  }


