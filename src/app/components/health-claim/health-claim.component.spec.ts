import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthClaimComponent } from './health-claim.component';

describe('HealthClaimComponent', () => {
  let component: HealthClaimComponent;
  let fixture: ComponentFixture<HealthClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
