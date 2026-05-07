import { Component, inject, resource } from '@angular/core';
import { PostService } from '../../services/posts';
import { PostCard } from '../../components/post-card/post-card';

@Component({
  selector: 'app-posts',
  imports: [PostCard],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  private postService = inject(PostService); 

  postResources = resource(
    {
      loader: () => this.postService.getPosts(), 
    }
  )
}
