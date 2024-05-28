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
  hasMoreItems: boolean = false;

  ngOnInit(): void {
    this.getAll(this.pageIndex, this.size);
  }

  previousPage(): void {
    if (this.pageIndex >= this.size) {
      this.pageIndex -= this.size;
    }
    this.getAll(this.pageIndex, this.size);
  }

  nextPage(): void {
    if (this.hasMoreItems){
      this.pageIndex += this.size;
      this.getAll(this.pageIndex, this.size);
    }
  }

  getAll(pageIndex: number, size: number): void {
    this.novostiService.getAllNews(pageIndex, size + 1).subscribe(
      (data: CardModel[]) => {
        if (data.length > size) {
          this.hasMoreItems = true;
          this.cards = data.slice(0, size);
        } else {
          this.hasMoreItems = false;
          this.cards = data;
        }
      },
      error => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
