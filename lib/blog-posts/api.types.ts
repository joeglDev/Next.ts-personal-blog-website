export interface NewBlogPostReqBody {
  Author: string | null;
  Title: string;
  Content: string;
  Likes:  number;//LikedByItem[];
  TimeStamp: string;
}

export interface EditBlogPostReqBody extends NewBlogPostReqBody {
  Id: number;
}

export interface LikedByItem {
  Id: number;
  UserName: string;
}
