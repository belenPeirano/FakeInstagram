import { Post } from "./post";

export interface User {
  id: number,
  username: string,
  userFullName: string,
  userPhotoPath: string,
  postsList: Post[],
}
