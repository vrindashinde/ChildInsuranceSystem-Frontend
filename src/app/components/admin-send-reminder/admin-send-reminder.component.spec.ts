import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSendReminderComponent } from './admin-send-reminder.component';

describe('AdminSendReminderComponent', () => {
  let component: AdminSendReminderComponent;
  let fixture: ComponentFixture<AdminSendReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSendReminderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSendReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
