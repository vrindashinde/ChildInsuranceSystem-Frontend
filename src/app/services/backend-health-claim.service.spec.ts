import { TestBed } from '@angular/core/testing';

import { BackendHealthClaimService } from './backend-health-claim.service';

describe('BackendHealthClaimService', () => {
  let service: BackendHealthClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendHealthClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
