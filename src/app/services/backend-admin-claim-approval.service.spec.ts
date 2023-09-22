import { TestBed } from '@angular/core/testing';

import { BackendAdminClaimApprovalService } from './backend-admin-claim-approval.service';

describe('BackendAdminClaimApprovalService', () => {
  let service: BackendAdminClaimApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendAdminClaimApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
