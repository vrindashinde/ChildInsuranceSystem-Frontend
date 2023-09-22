import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewallpaymentsComponent } from './user-viewallpayments.component';

describe('UserViewallpaymentsComponent', () => {
  let component: UserViewallpaymentsComponent;
  let fixture: ComponentFixture<UserViewallpaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewallpaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewallpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
