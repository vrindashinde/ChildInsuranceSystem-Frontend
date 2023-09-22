import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AuthService], 
})
export class AppComponent implements OnInit{
  userLoggedin:boolean;
  userRole:string;
  register:boolean;

  constructor( private login:AuthService) {

    this.userLoggedin = this.login.getUserLoggedIn();
    this.userRole = this.login.getUserRole();
    this.register = this.login.getRegister();
  
  }
  ngOnInit(): void {
  }

  checkLoginStatus():boolean{
    if (this.login.getUserLoggedIn()=="true"){
      return true;
    }
    else{
      return false;
    }
  }

  checkRole():boolean{
if (this.login.getUserRole()=="user"){
  return true;
}
else{
  return false;
}


  }

  checkRegister():boolean{
    if (this.login.getRegister()=="true"){
      return true;
    }
    else{
      return false;
    }
  }

  
  
  title = 'ChildInsuranceSystem';
  sideNavStatus: boolean = false;
  
  
  // userLoggedin:boolean = this.login.getUserLoggedIn();
  
  
}


