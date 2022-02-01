import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticias } from '../models/noticias.model';

const baseUrl = 'http://localhost:3001/noticias';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Noticias[]> {
    return this.http.get<Noticias[]>(baseUrl);
  }

  get(id: any): Observable<Noticias> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Noticias[]> {
    return this.http.get<Noticias[]>(`${baseUrl}?title=${title}`);
  }
}
