export interface NewBlogPostReqBody {
  Author: string | null;
  Title: string;
  Content: string;
  Likes: LikedByItem[];
  TimeStamp: string;
}

export interface LikedByItem {
  Id: number;
  UserName: string;
}
