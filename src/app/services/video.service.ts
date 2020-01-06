import { Injectable } from '@angular/core';
import { Video } from '../models/video';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videoURL: string;
  constructor(private http: HttpClient) { 
    this.videoURL = 'http://localhost:8080/videos'
  }

  upload(video: Video, file: File){
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('name', video.videoName);
    formData.append('description', video.videoDescription);
    formData.append('userId', video.userId.toString());
    this.http.post<Video>(this.videoURL, formData);
  }


}
