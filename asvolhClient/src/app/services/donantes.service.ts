import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donantes } from '../models/donantes.model';

const baseUrl = "http://localhost:3001/donantes"

@Injectable({
  providedIn: 'root'
})
export class DonantesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Donantes[]> {
    return this.http.get<Donantes[]>(baseUrl);
  }

  get(id: any): Observable<Donantes> {
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
}
