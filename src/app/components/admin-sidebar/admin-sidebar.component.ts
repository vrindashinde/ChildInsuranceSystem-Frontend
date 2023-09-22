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
      name: 'Policies',
      route: '/adminpolicycrud',
      icon:'fa-solid fa-user'
    }
    ,
    {
      number:'2',
      name: 'Payments',
      route: '/admin/payments',
      icon:'fa-solid fa-user'
    }
    ,
    {
      number:'3',
      name: 'Approve Claims',
      route: '/admin/approve-claims',
      icon:'fa-solid fa-user'
    }


  ];
  constructor() { }

  ngOnInit(): void {
  }


}
