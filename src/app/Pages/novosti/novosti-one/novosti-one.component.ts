import { Component, OnInit } from '@angular/core';
import { NovostiService } from '../novosti.service';
import { CardModel } from '../../../interfaces/card-model';

@Component({
  selector: 'app-novosti-one',
  templateUrl: './novosti-one.component.html',
  styleUrl: './novosti-one.component.scss'
})
export class NovostiOneComponent implements OnInit {
  
  constructor(private novostiService: NovostiService) { }
  cards !: CardModel[];
  pageIndex: number = 1;
  size: number = 12;

  ngOnInit(): void {
    this.getAll(this.pageIndex, this.size);
  }

  previousPage(): void {
    if (this.pageIndex >= 12){
      this.pageIndex -= 12;
    }
    this.getAll(this.pageIndex, this.size);
  }

  nextPage(): void {
    this.pageIndex += 12;
    this.getAll(this.pageIndex, this.size);
  }

  getAll(pageIndex: number, size: number): void {
    this.novostiService.getAllNews(pageIndex, size).subscribe(
      (data: CardModel[]) => {
        this.cards = data;
      },
      error => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
