// src/app/services/ciudad.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Ciudad } from '../interfaces/Ciudad';
import {AuthService} from "./auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private endpoint: string = environment.endpoint;
  private apiUrl: string = this.endpoint + "ciudad/";

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getList(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(`${this.apiUrl}all`, { headers: this.getHeaders() });
  }

  add(modelo: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(`${this.apiUrl}`, modelo, { headers: this.getHeaders() });
  }

  getCiudad(id: number): Observable<Ciudad> {
    return this.http.get<Ciudad>(`${this.apiUrl}${id}`, { headers: this.getHeaders() });
  }
}
