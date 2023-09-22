import { TestBed } from '@angular/core/testing';

import { AddPolicyService } from './add-policy.service';

describe('AddPolicyService', () => {
  let service: AddPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
