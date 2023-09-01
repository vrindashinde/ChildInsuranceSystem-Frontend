import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPremiumCalculationComponent } from './user-premium-calculation.component';

describe('UserPremiumCalculationComponent', () => {
  let component: UserPremiumCalculationComponent;
  let fixture: ComponentFixture<UserPremiumCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPremiumCalculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPremiumCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
