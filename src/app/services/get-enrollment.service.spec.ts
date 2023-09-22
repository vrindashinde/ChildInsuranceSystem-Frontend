import { TestBed } from '@angular/core/testing';

import { GetEnrollmentService } from './get-enrollment.service';

describe('GetEnrollmentService', () => {
  let service: GetEnrollmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEnrollmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
