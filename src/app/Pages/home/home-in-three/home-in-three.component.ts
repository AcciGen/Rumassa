import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../interfaces/productmodel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-in-three',
  templateUrl: './home-in-three.component.html',
  styleUrl: './home-in-three.component.scss'
})
export class HomeInThreeComponent {
  products!: ProductModel[]; 
  constructor(private http : HttpClient){}
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.http.get<ProductModel[]>(`https://rumassa.tohirjon.uz/api/Products/GetAll?pageIndex=1&size=10`).subscribe(
      (data)=>{
        this.products = data;
      }
    )
  }
}
