import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCard } from './post-card';
import { Post } from '../../services/posts';

describe('PostCard', () => {
  let component: PostCard;
  let fixture: ComponentFixture<PostCard>;

  const samplePost: Post = {
    id: 1,
    userId: 1,
    title: 'Test post',
    description: 'A test post for the card component.',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PostCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('post', samplePost);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
