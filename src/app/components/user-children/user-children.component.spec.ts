import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChildrenComponent } from './user-children.component';

describe('UserChildrenComponent', () => {
  let component: UserChildrenComponent;
  let fixture: ComponentFixture<UserChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
