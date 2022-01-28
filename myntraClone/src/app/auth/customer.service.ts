import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) {

   }
   url="http://localhost:3000/app/customers";
   getcustomer():Observable <any>
   {
     return this.http.get<any>('http://localhost:3000/app/customers');
   }
   addCustomer(firstNname:string,lastName:string,email:string,MobileNumber:number,address:string,postalCoad:number,password:string,password1:string){
     
    // console.log(firstNname);
    // console.log(lastName);
    const customer={firstName:firstNname,lastName:lastName,emailAdd:email,phoneNo:MobileNumber,address:address,postalCode:postalCoad,password:password,confirmPassword:password1};
    console.log(customer);
    this.http.post('http://localhost:3000/app/customers/add',customer).subscribe(data=>{
      console.log(data);
    })
   }
}
