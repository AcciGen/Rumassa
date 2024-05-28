import { Component } from '@angular/core';
import { News } from '../../../interfaces/news';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../../../interfaces/productmodel';

@Component({
  selector: 'app-home-in-four',
  templateUrl: './home-in-four.component.html',
  styleUrl: './home-in-four.component.scss'
})
export class HomeInFourComponent {

  news!: News[];
  products: ProductModel[] = []; // Initialize the products array

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.http.get<News[]>(`https://localhost:7245/api/News/GetByDate?size=2`)
      .subscribe((data) => {
        this.news = data;
        this.news.forEach(newsItem => {
          if (newsItem.products) {
            newsItem.products.forEach(product => {
              this.products.push(product);
            });
          }
        });
      });
  }
}
