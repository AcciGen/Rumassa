import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CardModel } from '../../interfaces/card-model';

@Injectable({
  providedIn: 'root'
})
export class NovostiService {

  api = `${environment.apiUrl}News`;

  constructor(private http : HttpClient) { }

  getAllNews(pageIndex: number, size: number) : Observable<CardModel[]>{
    return this.http.get<CardModel[]>(`${this.api}/GetAll?pageIndex=${pageIndex}&size=${size}`);
  }
}
