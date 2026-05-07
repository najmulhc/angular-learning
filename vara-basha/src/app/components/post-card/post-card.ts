import { Component, Input, input } from '@angular/core';
import { Post } from '../../services/posts';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css',
})
export class PostCard {
    @Input() post !: Post; 
}
