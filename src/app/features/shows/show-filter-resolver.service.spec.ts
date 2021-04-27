import { TestBed } from '@angular/core/testing';

import { ShowFilterResolverService } from './show-filter-resolver.service';

describe('ShowFilterResolverService', () => {
  let service: ShowFilterResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowFilterResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
