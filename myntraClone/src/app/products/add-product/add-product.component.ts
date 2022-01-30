import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/_categories/categories.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
categories:any;
file:File;
imagePreview:string;
public productForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private categoryService:CategoriesService,private productsService:ProductsService) {
    this.productForm=new FormGroup({
      productName:new FormControl(null,{validators:Validators.required}),
      productCategory:new FormControl(null,{validators:[Validators.required]}),
      productQuantity:new FormControl({Validators:[Validators.required]}),
      productPrice:new FormControl({Validators:[Validators.required]}),
      productDescription:new FormControl({Validators:[Validators.required]}),
      image:new FormControl({Validators:[Validators.required]})
    })

    this.getCategories();
   }
   handleImageFile(e:Event){
    const file = (<HTMLInputElement>e.target).files[0];
    console.log(file);
    this.productForm.patchValue({image:file})
    this.productForm.get('image').updateValueAndValidity();
   const reader=new FileReader();
   reader.onload=()=>{
     this.imagePreview=reader.result as string;
   };
   reader.readAsDataURL(file);
   }
   getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
   }

  ngOnInit(): void {
  }
  addProduct(){
    const image=this.imagePreview;
    console.log(image);
    this.productsService.addProduct( this.productForm.value.productName,
      this.productForm.value.productQuantity,
      this.productForm.value.productPrice,
      this.productForm.value.productDescription,
      image,
      this.productForm.value.productCategory).subscribe(data=>{
        console.log(data);
      });
      
    // this.productForm.value.productName,this.productForm.value.productCategory
    // ,this.productForm.value.productQuantity,this.productForm.value.productPrice,this.productForm.value.productDescription,image
  }

}
