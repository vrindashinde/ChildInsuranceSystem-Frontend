import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToPolicies(){

    this.router.navigate(['userenrollment']);

  }  

  navigateToChildRegistration(){

    this.router.navigate(['child-registration']);

  } 

 

}
