import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserEnrollmentsAfterpaymentComponent } from './user-my-enrollments.component';


 

describe('UserEnrollmentsAfterpaymentComponent', () => {

  let component: UserEnrollmentsAfterpaymentComponent;

  let fixture: ComponentFixture<UserEnrollmentsAfterpaymentComponent>;

 

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ UserEnrollmentsAfterpaymentComponent ]

    })

    .compileComponents();

 

    fixture = TestBed.createComponent(UserEnrollmentsAfterpaymentComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

 

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});

 