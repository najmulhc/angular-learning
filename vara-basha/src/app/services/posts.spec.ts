import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { PostService } from './posts';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
