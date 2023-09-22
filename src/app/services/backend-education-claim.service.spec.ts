import { TestBed } from '@angular/core/testing';

import { BackendEducationClaimService } from './backend-education-claim.service';

describe('BackendEducationClaimService', () => {
  let service: BackendEducationClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendEducationClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
