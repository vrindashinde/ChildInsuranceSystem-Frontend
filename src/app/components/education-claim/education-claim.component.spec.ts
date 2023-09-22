import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationClaimComponent } from './education-claim.component';

describe('EducationClaimComponent', () => {
  let component: EducationClaimComponent;
  let fixture: ComponentFixture<EducationClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
