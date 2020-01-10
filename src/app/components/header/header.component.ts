import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router) {}


  ngOnInit() {
  }

  isAuthenticated(){
    return this.userService.isAuthenticated();
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/');
  }

}
