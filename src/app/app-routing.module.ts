import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPolicyCRUDComponent } from './components/admin-policy-crud/admin-policy-crud.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component'; // Adjust the import path as needed
import { LoginComponent } from './components/login/login.component';
import { ChildRegistrationComponent } from './components/child-registration/child-registration.component';
import { UserEnrollmentComponent } from './components/user-enrollment/user-enrollment.component';
import { UserChildrenComponent } from './components/user-children/user-children.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserEnrollmentsAfterpaymentComponent } from './components/user-my-enrollments/user-my-enrollments.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserPolicyComponent } from './components/user-policy/user-policy.component';
import { UserPremiumCalculationComponent } from './components/user-premium-calculation/user-premium-calculation.component';
import { AdminViewPaymentsComponent } from './components/admin-view-payments/admin-view-payments.component';
import { UserPaymentComponent } from './components/user-payment/user-payment.component';
import { EndowmentPremiumCalculationComponent } from './components/endowment-premium-calculation/endowment-premium-calculation.component';
import { AdminClaimApprovalComponent } from './components/admin-claim-approval/admin-claim-approval.component';
import { HealthClaimComponent } from './components/health-claim/health-claim.component';
import { EducationClaimComponent } from './components/education-claim/education-claim.component';
import { EndowmentClaimComponent } from './components/endowment-claim/endowment-claim.component';
import { UserClaimComponent } from './components/user-claim/user-claim.component';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './components/user-profile/user-profile.component';



const routes: Routes = [                 // paths which we include in the localhost
  { path: 'registration', component: UserRegistrationComponent },         
  { path: 'login', component: LoginComponent},
  { path: 'child-registration', component: ChildRegistrationComponent},
  { path: 'user-children' , component: UserChildrenComponent},
  { path: 'user-dashboard' , component: UserDashboardComponent},
  {path:"adminpolicycrud",component:AdminPolicyCRUDComponent},
  {path: 'admin-dashboard' , component: AdminDashboardComponent},
  {path:"userenrollment",component:UserEnrollmentComponent},
  {path:"userenrollmentsafterpayment",component:UserEnrollmentsAfterpaymentComponent},
  {path:"userpolicy",component:UserPolicyComponent},
  {path:'premium',component:UserPremiumCalculationComponent},
  {path: 'admin/payments',component:AdminViewPaymentsComponent},
  {path: 'payment/:premiumCalc',component:UserPaymentComponent},
  {path:'premium/endowment',component:EndowmentPremiumCalculationComponent},
  {path:'dashboard',component:UserDashboardComponent},
  {path:'admin/approve-claims',component:AdminClaimApprovalComponent},
  {path:'new-health-claim',component:HealthClaimComponent},
  {path:'new-education-claim',component:EducationClaimComponent},
  {path:'new-endowment-claim',component:EndowmentClaimComponent},
  {path:'user-claims',component:UserClaimComponent},
  {path:'user-profile',component:UserProfileComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
   
    FormsModule,
    HttpClientModule,
    DatePipe
  
  
  
  ],
  providers: [DatePipe],

  exports: [RouterModule]
})
export class AppRoutingModule { }
