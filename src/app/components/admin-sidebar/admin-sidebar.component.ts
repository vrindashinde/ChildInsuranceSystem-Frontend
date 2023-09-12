import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number:'1',
      name: 'Dashboard',
      route: '/dashboard',
      icon:'fa-solid fa-house'
    },
    {
      number:'2',
      name: 'Profile',
      route: '/profile',
      icon:'fa-solid fa-user'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
