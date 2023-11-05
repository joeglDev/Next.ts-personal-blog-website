export interface LikeItem {
  //add user id instead of username when login is added
  id: number;
  username: string;
}

export interface BlogPost {
  id: number;
  author: string;
  title: string;
  content: string;
  likes: LikeItem[];
  timeStamp: string;
}
