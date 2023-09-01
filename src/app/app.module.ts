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
    AdminSendReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
