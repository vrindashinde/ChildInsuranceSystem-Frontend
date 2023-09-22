import { Component, OnInit } from '@angular/core';
import { LogedinService } from 'src/app/services/logedin.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  constructor(private loggedInService:LogedinService) { }
  UserDetails:any={};

  firstName : string = JSON.parse(String(localStorage.getItem("userDetails"))).firstName;
  lastName : string = JSON.parse(String(localStorage.getItem("userDetails"))).lastName;
  address : string = JSON.parse(String(localStorage.getItem("userDetails"))).address;
  email : string = JSON.parse(String(localStorage.getItem("userDetails"))).email;
  adhaar : string = JSON.parse(String(localStorage.getItem("userDetails"))).adhaar;
  bankName : string = JSON.parse(String(localStorage.getItem("userDetails"))).bankName;
  phone : string = JSON.parse(String(localStorage.getItem("userDetails"))).phone;
  accountActive : string = JSON.parse(String(localStorage.getItem("userDetails"))).accountActive;

  ngOnInit(): void {

    this.getParentDetails();

 //  console.log(this.firstName);

  }


getParentDetails(){

  this.UserDetails=this.loggedInService.getData()
  console.log(this.UserDetails);

}

}