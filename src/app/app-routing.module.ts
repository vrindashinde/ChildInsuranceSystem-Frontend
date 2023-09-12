import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRegistrationComponent } from './components/user-registration/user-registration.component'; // Adjust the import path as needed
import { LoginComponent } from './components/login/login.component';
import { ChildRegistrationComponent } from './components/child-registration/child-registration.component';

import { UserChildrenComponent } from './components/user-children/user-children.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [                 // paths which we include in the localhost
  { path: 'registration', component: UserRegistrationComponent },         
  { path: 'login', component: LoginComponent},
  { path: 'child-registration', component: ChildRegistrationComponent},
  { path: 'user-children' , component: UserChildrenComponent},
  { path: 'user-dashboard' , component: UserDashboardComponent},

  {path: 'admin-dashboard' , component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
