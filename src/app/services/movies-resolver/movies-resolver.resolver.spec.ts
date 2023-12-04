import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { moviesResolverResolver } from './movies-resolver.resolver';

describe('moviesResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => moviesResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
