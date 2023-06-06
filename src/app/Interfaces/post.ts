export interface Post {
    id: string,
    photoPath: string,
    tag: string,
}

export interface User {
    id: string,
    username: string,
    userFullName: string,
    userPhotoPath: string,
    postsList: Post[],
}