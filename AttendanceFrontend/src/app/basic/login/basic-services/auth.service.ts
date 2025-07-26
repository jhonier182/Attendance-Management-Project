import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

//creamos la constante de la url de la api
const API_BACKEND = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(loginData: any):Observable<any>{
    return this.http.post(API_BACKEND + '/api/auth/login', loginData);
  }
}
