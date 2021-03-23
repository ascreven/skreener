import { TestBed } from '@angular/core/testing';

import { MovieFilterResolverService } from './movie-filter-resolver.service';

describe('MovieFilterResolverService', () => {
  let service: MovieFilterResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieFilterResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
