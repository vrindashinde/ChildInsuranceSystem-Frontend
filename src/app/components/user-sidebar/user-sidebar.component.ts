import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {



  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number:'1',
      name: 'Dashboard',
      route: '/user-dashboard',
      icon:'fa-solid fa-house'
    },
    {
      number:'2',
      name: 'Profile',
      route: '/user-profile',
      icon:'fa-solid fa-user'
    },
    {
      number:'3',
      name: 'Enrollments',
      route: 'userenrollment',
      icon:'fa-solid fa-shield-halved'
    },
    {
      number:'4',
      name: 'Claims',
      route: 'user-claims',
      icon:'fa-solid fa-file-invoice'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }






}
