import { TestBed } from '@angular/core/testing';

import { GetReposListService } from './get-repos-list.service';

describe('GetReposListService', () => {
  let service: GetReposListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetReposListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
