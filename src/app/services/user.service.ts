import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';
import { JwtAuthResponse } from '../models/jwt-auth-response';
import { stringify } from 'querystring';
import { environment } from 'src/environments/environment';
import {UserPayload} from '../components/signup/user-payload';

@Injectable({providedIn: 'root'})
export class UserService {

  username: string;
  private url: string;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.url = environment.url;
  }

  singup(userPayload: UserPayload) {
    return this.http.post(this.url + '/signup', userPayload);
  }

  login(login: Login): Observable<boolean> {
    return this.http.post<JwtAuthResponse>(this.url + '/login', login).pipe(map(data => {
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
    return this.http.get<User[]>( this.url + '/users');
  }
}
