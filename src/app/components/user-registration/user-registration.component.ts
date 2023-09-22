// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-user-registration',
//   templateUrl: './user-registration.component.html',
//   styleUrls: ['./user-registration.component.css']
// })
// export class UserRegistrationComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



// user-registration.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { AuthService } from 'src/app/services/auth-service.service';
import { ParentService } from 'src/app/services/parent.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user = {
    parentId: null,
    firstName: '',
    lastName: '',
    adhaar: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountActive: true,
    status: 0,
  };

  
  constructor(private parentService: ParentService, private router: Router, private login:AuthService) {}


  ngOnInit() {}


  onRegister(){


    this.login.setRegister("false");

  }





  onSubmit() {

    if (!this.user.firstName || !this.user.lastName || !this.user.adhaar || !this.user.address || !this.user.phone || !this.user.email || !this.user.password || !this.user.bankName || !this.user.accountNumber || !this.user.ifscCode) {
      // Handle validation error, e.g., show a message to the user
      console.log('Please fill in all fields.');
      return;
    }
    // Handle form submission, e.g., send data to the server
    // You can make an HTTP POST request to your Spring Boot backend here



    // Call the ParentService's addParent method to post user registration data
    this.parentService.addParent(this.user).subscribe(
      (response) => {
        // Registration successful
        console.log('User registered successfully', response);

        // Redirect to the login page upon successful registration
        this.login.setRegister("false");
        this.router.navigate(['/login']);

        alert('User registered successfully');
      },
      (error) => {
        // Registration failed, handle error here
        console.error('Error registering user', error);
        // Optionally, display an error message to the user
      }
    );
  }

  }

 