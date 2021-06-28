import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  
    private baseUrl = 'http://localhost:8084/api';
    constructor(private http: HttpClient) { }
    getUser(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/user/userid/${id}`);
    }
    createUser(user: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}/user/save`, user);
    }
   /* updateUser(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/user/${id}/update`, value);
    }
    deleteUser(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/user/${id}`, { responseType: 'text' });
    }*/
    getUsersList(): Observable<any> {
      return this.http.get(`${this.baseUrl}/user/findallusers`);
    }
}
