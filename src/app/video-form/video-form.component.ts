import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.css']
})
export class VideoFormComponent implements OnInit {
video: Video;
file: File;
  constructor(private videoService: VideoService, private router: Router ) {
    this.video = new Video();
   }

   onFileChange(event){
     this.file = event.target.files.item(0);
   }
   onSubmit(){
    this.videoService.upload(this.video, this.file).subscribe(data => {
      console.log('Video uploaded');
      alert("Video uploaded successfully.");
      this.router.navigateByUrl('/homepage');
    }, error => {
      console.log('Upload failed'); 
    });
  }

  ngOnInit() {
  }

}
