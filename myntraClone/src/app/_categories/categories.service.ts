import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ICategory } from './ICategory.model';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public http:HttpClient) {
  }
  
  getCategories():Observable<ICategory[]>
  {
    return this.http.get<ICategory[]>('http://localhost:3000/categories');
  }
  addCategory(categoryName:string,categoryDescription:string)
  {
    console.log(categoryName);
    console.log(categoryDescription);
    const headers = { 'content-type': 'application/json'};
    const category={categoryname:categoryName,categorydescription:categoryDescription}
    //console.log(category);
    return this.http.post('http://localhost:3000/categories/add/',category, {responseType: 'text'});
  }
}
