import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { LoginComponent } from './components/login/login.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserPolicyComponent } from './components/user-policy/user-policy.component';
import { UserPremiumCalculationComponent } from './components/user-premium-calculation/user-premium-calculation.component';
import { UserEnrollmentComponent } from './components/user-enrollment/user-enrollment.component';
import { UserPaymentComponent } from './components/user-payment/user-payment.component';
import { UserClaimComponent } from './components/user-claim/user-claim.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminDocumentVerificationComponent } from './components/admin-document-verification/admin-document-verification.component';
import { AdminPolicyCRUDComponent } from './components/admin-policy-crud/admin-policy-crud.component';
import { AdminGetEnrollmentsComponent } from './components/admin-get-enrollments/admin-get-enrollments.component';
import { AdminViewPaymentsComponent } from './components/admin-view-payments/admin-view-payments.component';
import { AdminClaimApprovalComponent } from './components/admin-claim-approval/admin-claim-approval.component';
import { AdminSendReminderComponent } from './components/admin-send-reminder/admin-send-reminder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ChildRegistrationComponent } from './components/child-registration/child-registration.component';
import { UserChildrenComponent } from './components/user-children/user-children.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { UserEnrollmentsAfterpaymentComponent } from './components/user-my-enrollments/user-my-enrollments.component';
import { EndowmentPremiumCalculationComponent } from './components/endowment-premium-calculation/endowment-premium-calculation.component';
import { UserViewallpaymentsComponent } from './components/user-viewallpayments/user-viewallpayments.component';
import { HealthClaimComponent } from './components/health-claim/health-claim.component';
import { EducationClaimComponent } from './components/education-claim/education-claim.component';
import { EndowmentClaimComponent } from './components/endowment-claim/endowment-claim.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    UserHomeComponent,
    UserPolicyComponent,
    UserPremiumCalculationComponent,
    UserEnrollmentComponent,
    UserPaymentComponent,
    UserClaimComponent,
    AdminDashboardComponent,
    AdminDocumentVerificationComponent,
    AdminPolicyCRUDComponent,
    AdminGetEnrollmentsComponent,
    AdminViewPaymentsComponent,
    AdminClaimApprovalComponent,
    AdminSendReminderComponent,
    ChildRegistrationComponent,
    UserChildrenComponent,
    UserDashboardComponent,
    UserSidebarComponent,
    AdminSidebarComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    
    UserEnrollmentsAfterpaymentComponent,
         EndowmentPremiumCalculationComponent,
         UserViewallpaymentsComponent,
         HealthClaimComponent,
         EducationClaimComponent,
         EndowmentClaimComponent,
         UserProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
