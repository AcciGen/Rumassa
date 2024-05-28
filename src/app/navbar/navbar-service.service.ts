import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categoryModel } from '../interfaces/categoryModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {

  api = `${environment.apiUrl}Category`;

  constructor(private http : HttpClient) { }

  getAllCategories() : Observable<categoryModel[]>
{
  return this.http.get<categoryModel[]>(`${this.api}/GetAll`)
}}
