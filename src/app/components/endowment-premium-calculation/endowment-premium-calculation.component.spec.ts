import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndowmentPremiumCalculationComponent } from './endowment-premium-calculation.component';

describe('EndowmentPremiumCalculationComponent', () => {
  let component: EndowmentPremiumCalculationComponent;
  let fixture: ComponentFixture<EndowmentPremiumCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndowmentPremiumCalculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndowmentPremiumCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
