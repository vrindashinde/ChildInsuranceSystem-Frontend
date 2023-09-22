import { TestBed } from '@angular/core/testing';

import { FilterPoliciesService } from './filter-policies.service';

describe('FilterPoliciesService', () => {
  let service: FilterPoliciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPoliciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
