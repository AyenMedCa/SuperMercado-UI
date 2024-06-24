// src/app/services/supermercado.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supermercado } from 'src/app/interfaces/Supermercado';
import { environment } from "../../environments/environment";
import {AuthService} from "./auth-service.service";


@Injectable({
  providedIn: 'root'
})
export class SupermercadoService {
  private endpoint: string = environment.endpoint;
  private apiUrl: string = this.endpoint + "supermercado";

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getSupermercados(): Observable<Supermercado[]> {
    return this.http.get<Supermercado[]>(`${this.apiUrl}/all`, { headers: this.getHeaders() });
  }

  getSupermercado(id: number): Observable<Supermercado> {
    return this.http.get<Supermercado>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  addSupermercado(supermercado: FormData): Observable<Supermercado> {
    return this.http.post<Supermercado>(this.apiUrl, supermercado, { headers: this.getHeaders() });
  }

  updateSupermercado(id: number, supermercado: FormData): Observable<Supermercado> {
    return this.http.put<Supermercado>(`${this.apiUrl}/${id}`, supermercado, { headers: this.getHeaders() });
  }

  deleteSupermercado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
