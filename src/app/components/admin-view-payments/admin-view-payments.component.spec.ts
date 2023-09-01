import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewPaymentsComponent } from './admin-view-payments.component';

describe('AdminViewPaymentsComponent', () => {
  let component: AdminViewPaymentsComponent;
  let fixture: ComponentFixture<AdminViewPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
