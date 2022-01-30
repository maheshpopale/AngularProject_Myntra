import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customers:any[]=[];
  login='';
  constructor(private customerService:CustomerService, private router:Router) { }

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
        if(_element.email==userName && _element.password==userPassword){
          console.log(_element.email);
          this.login="sucssess";
          this.router.navigate(['viewCustomers'])
        }
        else{
          this.login="envalid username name"

        }
      });
      
    });
    
  }


}
