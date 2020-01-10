import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  videos: Video[];

  constructor(private localStorageService: LocalStorageService, private videoService: VideoService) {}

  currentUsername = this.localStorageService.retrieve('username');

  ngOnInit() {
    this.videoService.getAllVideos()
    .subscribe( data => {
      this.videos = data;
    });
  }

}
