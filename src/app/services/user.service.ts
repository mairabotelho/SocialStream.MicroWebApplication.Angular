import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: User){
    this.http.post<User>('/server/users', user);
  }

  // updateUser(username: string, user: User){
  //   return this.http.put('/server/users' + username, user);
  // }

  // findByUsername(username: string){
  //   return this.http.get('/server/users' + username);
  // }

  // findAll(){
  //   return this.http.get<User[]>('/server/users');
  // }

  // deleteByUsername(username: string){
  //   return this.http.delete('/server/users' + username);
  // }
}
