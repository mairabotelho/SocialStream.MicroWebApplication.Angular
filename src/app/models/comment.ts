import { Video } from './video';

export class Comment {
  commentId: number;
  videoId: number;
  comment: string;
  reply: string;
  userId: number;
  createDate: Date;
  video: Video; 
}