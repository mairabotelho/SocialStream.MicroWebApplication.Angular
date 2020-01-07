import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) {}

  currentUsername = this.localStorageService.retrieve('username');

  ngOnInit() {
  }

}
