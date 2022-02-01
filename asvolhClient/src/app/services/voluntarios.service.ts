import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voluntarios } from '../models/voluntarios.model';

const baseUrl = "http://localhost:3001/voluntarios"

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Voluntarios[]> {
    return this.http.get<Voluntarios[]>(baseUrl);
  }

  get(id: any): Observable<Voluntarios> {
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

  findByTitle(title: any): Observable<Voluntarios[]> {
    return this.http.get<Voluntarios[]>(`${baseUrl}?title=${title}`);
  }
}
