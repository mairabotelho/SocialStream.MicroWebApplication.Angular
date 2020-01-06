import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';
@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.css']
})
export class VideoFormComponent implements OnInit {
private video: Video;
private file: File;
  constructor(private videoService: VideoService) {
    this.video = new Video();
   }

   onFileChange(event){
     this.file = event.target.files.item(0);
   }
   onSubmit(){
    this.videoService.upload(this.video, this.file).subscribe(result => console.log(result));
   }

  ngOnInit() {
  }

}
