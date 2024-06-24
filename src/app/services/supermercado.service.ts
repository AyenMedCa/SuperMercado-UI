// src/app/services/supermercado.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Supermercado} from 'src/app/interfaces/Supermercado';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupermercadoService {
  private endpoint:string = environment.endpoint;
  private apiUrl:string = this.endpoint + "supermercado";


  constructor(private http: HttpClient) { }

  getSupermercados(): Observable<Supermercado[]> {
    return this.http.get<Supermercado[]>(`${this.apiUrl}/all`);
  }

  getSupermercado(id: number): Observable<Supermercado> {
    return this.http.get<Supermercado>(`${this.apiUrl}/${id}`);
  }

  addSupermercado(supermercado: FormData): Observable<Supermercado> {
    return this.http.post<Supermercado>(this.apiUrl, supermercado);
  }

  updateSupermercado(id: number, supermercado: FormData): Observable<Supermercado> {
    return this.http.put<Supermercado>(`${this.apiUrl}/${id}`, supermercado);
  }

  deleteSupermercado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
