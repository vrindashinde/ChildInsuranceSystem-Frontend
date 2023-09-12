// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   user = {
//     emailOrUsername: '',
//     password: ''
//   };

//   constructor() {}

//   ngOnInit() {}

//   onSubmit() {
//     // Handle login form submission here
//     console.log(this.user);
//     // You can make an HTTP POST request to your backend for authentication here
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { Parent } from 'src/app/classes/Parent';
import { AuthService } from 'src/app/services/auth-service.service';
import { LogedinService } from 'src/app/services/logedin.service';
import { ParentService } from 'src/app/services/parent.service';

import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from 'src/app/classes/Admin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Role
  selectedRole: string = 'user';



  // User
  user = {
    emailOrUsername: '',
    password: ''
  };



  message : String = "";
  errorMessage : String = "";
  parentlogin : Parent = new Parent("","");
  loggedinParent: Parent = {parentId:0,firstName:"",lastName:"",email:""};
  userRole: number = 0;
  newAdmin : Admin = new Admin("","",0);


  constructor(private parentService: ParentService, private router: Router,
    private login:AuthService, private loggedInService:LogedinService, private adminLogin:AdminService
    
    ) {}

  ngOnInit() {

  }



  onSubmit() {
    if(this.selectedRole == "user"){
//////////////User/////////////
    
  // Role
  console.log("Selected role:", this.selectedRole);


    // Basic client-side validation
    if (!this.user.emailOrUsername || !this.user.password) {
      // Handle validation error, e.g., show a message to the user
      console.log('Please fill in all fields.');
      return;

    }
    else{
this.parentlogin.email= this.user.emailOrUsername;
this.parentlogin.password= this.user.password;

      this.login.login(this.parentlogin)
      .subscribe({
       next:(data)=>{
         console.log(data);
         this.message="Logged In Sucessfully";
         this.errorMessage="";

         this.login.setUserLoggedIn(true);
         this.login.setUserRole("user");

         this.router.navigate(['/user-dashboard']);

        this.loggedInService.setData(this.loggedinParent);
       

        alert('User Logged In successfully');


       },        //Response from restcontroller which sends success httpCode eg 200

       error:(error)=>{
         console.log(error)
         this.message="";
         this.errorMessage="Cannot Log in";
        alert("Incorrect Username or password");
       }//handle restControllerAdvice which sends error httpCode eg 404

    });
  }


}
//////////////

// ADMIN


else{


  
  // Role
  console.log("Selected role:", this.selectedRole);


    // Basic client-side validation
    if (!this.user.emailOrUsername || !this.user.password) {
      // Handle validation error, e.g., show a message to the user
      console.log('Please fill in all fields.');
      return;

    }
    else{
this.newAdmin.email= this.user.emailOrUsername;
this.newAdmin.password= this.user.password;

      this.adminLogin.login(this.newAdmin)
      .subscribe({
       next:(data)=>{
         console.log(data);
         this.message="Logged In Sucessfully";
         this.errorMessage="";

         this.router.navigate(['/admin-dashboard']);
       
         this.login.setUserLoggedIn(true);
         this.login.setUserRole("admin");
         
        this.loggedInService.setData(this.newAdmin);

        
        alert('Admin Logged In successfully');


       },        //Response from restcontroller which sends success httpCode eg 200

       error:(error)=>{
         console.log(error)
         this.message="";
         this.errorMessage="Cannot Log in";
        alert("Incorrect Username or password");
       }//handle restControllerAdvice which sends error httpCode eg 404

    });
  }









}



///////////////





      }


    // this.parentService.addParent(this.user).subscribe(
    //   (response) => {
    //     // Registration successful
    //     console.log('User logged In successfully', response);

    //     // Redirect to the login page upon successful registration
    //     this.router.navigate(['/user-dashboard']);

    //     alert('User Logged In successfully');
    //   },
    //   (error) => {
    //     // Registration failed, handle error here
    //     console.error('Error logging in the user', error);
    //     // Optionally, display an error message to the user
    //   }
    // );
  
  }


 



