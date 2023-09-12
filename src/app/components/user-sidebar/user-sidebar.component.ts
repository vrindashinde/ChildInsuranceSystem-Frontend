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
      route: '#',
      icon:'fa-solid fa-user'
    },
    {
      number:'3',
      name: 'Policies',
      route: '#',
      icon:'fa-solid fa-shield-halved'
    },
    {
      number:'4',
      name: 'Calculate Premium',
      route: '#',
      icon:'fa-solid fa-calculator'
    },
    {
      number:'5',
      name: 'Childeren',
      route: '#',
      icon:'fa-solid fa-hands-holding-child'
    },
    {
      number:'6',
      name: 'Payments',
      route: '#',
      icon:'fa-solid fa-credit-card'
    },
    {
      number:'7',
      name: 'Claims',
      route: '#',
      icon:'fa-solid fa-file-invoice'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }






}
