import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPolicyCRUDComponent } from './admin-policy-crud.component';

describe('AdminPolicyCRUDComponent', () => {
  let component: AdminPolicyCRUDComponent;
  let fixture: ComponentFixture<AdminPolicyCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPolicyCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPolicyCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
