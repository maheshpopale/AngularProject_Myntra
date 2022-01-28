import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    // console.log(f.value);  // { first: '', last: '' }
    // console.log(f.valid);  // false
    // console.log(f.value.userFirstname);
    // console.log(f.value.userlastname);
    this.customerService.addCustomer(f.value.Firstname,f.value.lastname,f.value.email,f.value.MobileNumber,f.value.Address,
      f.value.PostalCode,f.value.password1,f.value.password2);
  }

}
