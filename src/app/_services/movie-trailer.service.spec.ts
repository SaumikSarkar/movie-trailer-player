import { TestBed } from '@angular/core/testing';

import { MovieTrailerService } from './movie-trailer.service';

describe('MovieTrailerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieTrailerService = TestBed.get(MovieTrailerService);
    expect(service).toBeTruthy();
  });
});
