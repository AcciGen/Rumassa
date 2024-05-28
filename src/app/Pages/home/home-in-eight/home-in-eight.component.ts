import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { News } from '../../../interfaces/news';

@Component({
  selector: 'app-home-in-eight',
  templateUrl: './home-in-eight.component.html',
  styleUrl: './home-in-eight.component.scss'
})
export class HomeInEightComponent  implements OnInit{
  news!: News[];

 constructor(private http : HttpClient){}
  ngOnInit(): void {
    this.getAllNews()
  }
 getAllNews(){
   this.http.get<News[]>(`https://localhost:7245/api/News/GetByDate?size=5`)
      .subscribe((data) => {
        this.news = data;}
        )
 }
}
