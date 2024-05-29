import { Component } from '@angular/core';
import { Review } from '../../../interfaces/Review';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-in-five',
  templateUrl: './home-in-five.component.html',
  styleUrl: './home-in-five.component.scss'
})
export class HomeInFiveComponent {
  
  reviews !: Review[]
  constructor(private http : HttpClient){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.http.get<Review[]>(`https://rumassa.tohirjon.uz/api/Review/GetAll`)
    .subscribe((data)=>{
      this.reviews = data;
    })
  }
}
