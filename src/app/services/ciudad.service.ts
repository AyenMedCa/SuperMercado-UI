import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Ciudad} from "../interfaces/Ciudad";

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private endpoint:string = environment.endpoint;
  private apiUrl:string = this.endpoint + "ciudad/";

  constructor(private http:HttpClient) { }

  getList():Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(`${this.apiUrl}all`);
  }

  add(modelo:Ciudad):Observable<Ciudad>{
    return this.http.post<Ciudad>(`${this.apiUrl}`, modelo);
  }

  getCiudad(id: number): Observable<Ciudad> {
    return this.http.get<Ciudad>(`${this.apiUrl}${id}`);
  }
}
