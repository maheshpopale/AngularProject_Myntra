import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
       ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ViewCustomerComponent
  ]
})
export class AuthModule { }
