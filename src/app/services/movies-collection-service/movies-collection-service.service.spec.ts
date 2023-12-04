import { TestBed } from '@angular/core/testing';

import { MoviesCollectionServiceService } from './movies-collection-service.service';

describe('MoviesCollectionServiceService', () => {
  let service: MoviesCollectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesCollectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
