import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = `http://localhost:8084/api`;
  constructor(private http: HttpClient) {
  }
  login(login: Object): Observable<Object> {
    const url = `${this.loginUrl}/signin`;
    return this.http.post(url, login, { responseType: 'text' });
  }
 
  logout(id: string): Observable<any> {
    return this.http.get(`${this.loginUrl}/signout/${id}`, { responseType: 'text' });
  }
}
