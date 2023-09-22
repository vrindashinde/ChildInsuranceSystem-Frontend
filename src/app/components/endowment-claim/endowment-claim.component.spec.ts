import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndowmentClaimComponent } from './endowment-claim.component';

describe('EndowmentClaimComponent', () => {
  let component: EndowmentClaimComponent;
  let fixture: ComponentFixture<EndowmentClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndowmentClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndowmentClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
