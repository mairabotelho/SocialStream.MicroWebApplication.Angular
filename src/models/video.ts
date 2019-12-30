import { Comment } from './comment';

export class Video {
  videoId: number;
  videoName: string;
  videoDescription: string;
  userId: number;
  comments: Comment[];
//filepath: string;
//file: File;
}