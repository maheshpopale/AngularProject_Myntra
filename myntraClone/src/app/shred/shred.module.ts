import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layout/column-one/column-one.component';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ColumnOneComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ColumnOneComponent
  ]
})
export class ShredModule { }
