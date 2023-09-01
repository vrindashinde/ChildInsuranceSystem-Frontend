import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetEnrollmentsComponent } from './admin-get-enrollments.component';

describe('AdminGetEnrollmentsComponent', () => {
  let component: AdminGetEnrollmentsComponent;
  let fixture: ComponentFixture<AdminGetEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetEnrollmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGetEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
