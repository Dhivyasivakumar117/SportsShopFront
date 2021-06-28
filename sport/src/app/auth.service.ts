import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedIn: boolean;
  private userName: string = '';
  constructor() {
    this.isloggedIn = false;
  }
  login(username: string, password: string): Observable<boolean> | undefined{

    if (username == "admin" && password == "admin") {
      this.isloggedIn = true;
      this.userName = username;
      return of(this.isloggedIn);
    }
    else {
      alert("Sorry, only admin has access to this view this");
      return of(false);
    }
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }
}
