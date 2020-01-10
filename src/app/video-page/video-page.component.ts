import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {

  @Input()
  video: Video
  videoId:number

  constructor(private videoService: VideoService, private route: ActivatedRoute) {

   }

  

  ngOnInit() {
    this.getVideo();
  }

 getVideo(){
   const id = + this.route.snapshot.paramMap.get('videoId');
   this.videoService.getVideo(id).subscribe(video => this.video = video);
 }
}