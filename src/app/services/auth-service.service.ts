import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import { Usuario, UserLogin } from "../interfaces/Usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint: string = environment.endpoint;
  private apiUrl: string = this.endpoint + "auth";
  private token: string | null = null;

  private loginStatusSubject = new BehaviorSubject<boolean>(this.getToken() !== null);
  loginStatus$ = this.loginStatusSubject.asObservable();

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  registrar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, usuario);
  }

  login(credentials: UserLogin): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          if (response && response.access_token) {
            this.setToken(response.access_token);
            this.loginStatusSubject.next(true);
          }
        })
      );
  }

  private setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return this.token;
  }

  logout(): Observable<any> {
    const token = this.getToken();
    return this.http.post<any>(`${this.apiUrl}/logout`, { token })
      .pipe(
        tap(() => {
          this.token = null;
          localStorage.removeItem('token');
          this.loginStatusSubject.next(false);
        })
      );
  }
}
