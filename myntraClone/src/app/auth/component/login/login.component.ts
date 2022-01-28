import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customers:any[]=[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    
  }
  onSubmit(f: NgForm) {
    // console.log(f.value);  // { first: '', last: '' }
    // console.log(f.valid);  // false
    const userName = f.value.email;
    const userPassword=f.value.password;
    this.customerService.getcustomer().subscribe(data=>{
      console.log(data);
      this.customers=(data);
     this.customers.forEach((_element: any) => {
        if(_element.email==userName){
          console.log(_element.email);

        }
      });
    });
  }

}
