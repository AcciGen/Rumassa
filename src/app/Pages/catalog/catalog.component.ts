import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {

  constructor(private http:HttpClient){
    http.get<any>("https://rumassa.tohirjon.uz/api/Products/GetAll?pageIndex=1&size=4").subscribe({
      next:(data)=>{
        this.products=data
        console.log(this.products)
      },
      error:(err)=>{
        console.error
      }
    })
  }

  products!:any
  base:string="https://rumassa.tohirjon.uz"
}
