import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Post 
{
  id: number; 
  title : string; 
  userId: number; 
  description: string; 
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private httpClient = inject(HttpClient); // this is the client to fetch posts from the api 

  getPosts() : Promise<Post[]> { 
    return firstValueFrom(this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts'));
  }

  createPost(post: Omit<Post, 'id'>): Promise<Post> {
    return firstValueFrom(this.httpClient.post<Post>('https://jsonplaceholder.typicode.com/posts', post));
  }
}
