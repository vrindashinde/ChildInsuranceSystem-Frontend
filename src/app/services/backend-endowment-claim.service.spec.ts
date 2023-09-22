import { TestBed } from '@angular/core/testing';

import { BackendEndowmentClaimService } from './backend-endowment-claim.service';

describe('BackendEndowmentClaimService', () => {
  let service: BackendEndowmentClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendEndowmentClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
