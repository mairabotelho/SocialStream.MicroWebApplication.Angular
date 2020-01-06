import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';
import { JwtAuthResponse } from '../models/jwt-auth-response';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
  }

  singup(user: User) {
    return this.http.post('/server/signup', user);
  }

  login(login: Login): Observable<boolean> {
    return this.http.post<JwtAuthResponse>('/server/login', login).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }

  isAuthenticated(): boolean {
    return this.localStorageService.retrieve('username') != null;
  }

  logout() {
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
  }
  
  findAll(){
    return this.http.get<User[]>('/server/users');
  }
}
