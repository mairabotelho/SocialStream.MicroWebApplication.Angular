import { Injectable } from '@angular/core';
import { Video } from '../models/video';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videoURL: string;
  constructor(private http: HttpClient) { 
    this.videoURL = 'http://localhost:8080/videos'
    //we can get this out to enviornment variables later
  }

  upload(video: Video, file: File){
    console.log(video.videoName + ' ' + video.videoDescription);
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('videoName', video.videoName);
    formData.append('videoDescription', video.videoDescription);
    return this.http.post<FormData>(this.videoURL, formData);
  }

  public getVideo(videoId: number): Observable<Video>{
    return this.http.get<Video>(this.videoURL + '/' + videoId);
  } 


}
