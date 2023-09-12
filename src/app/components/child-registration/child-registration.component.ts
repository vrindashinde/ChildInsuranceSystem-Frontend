import { Component, ViewChild, OnInit } from '@angular/core';
import { ChildrenService } from 'src/app/services/children.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation


@Component({
  selector: 'app-child-registration',
  templateUrl: './child-registration.component.html',
  styleUrls: ['./child-registration.component.css'],
})
export class ChildRegistrationComponent implements OnInit {
  constructor(private childrenService: ChildrenService, private router: Router) {}

  childData = {
    name: '',
    age: 0,
  };

  @ViewChild('childForm', { static: false }) childForm!: NgForm; // Reference to the form

  // Initialize the properties for your form data
  child = {
    childName: '',
    childDob: '',
    childUID: '',
    childGender: '',
    relationship: '',
    accountActive: true
  };

  childAge: number = 0; // Initialize the property to store the child's age

  // Method to calculate child's age
  calculateChildAge() {
    // ... (your existing code for calculating the child's age)
    const dob = new Date(this.child.childDob);
    const today = new Date();
    const ageDiff = today.getFullYear() - dob.getFullYear();
    //console.log(ageDiff);

    if(ageDiff >= 18)
    alert("Child's age should be less than 18")

    // Check if the birth date has occurred this year or not
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      this.childAge = ageDiff - 1; // Subtract 1 if the birth date hasn't occurred yet this year
    } else {
      this.childAge = ageDiff;
    }

  }

  ngOnInit() {
   // this.fetchParentId();
  }


  // fetchParentId() {
  //   this.childrenService.getAllChildrenByParentId().subscribe(
  //     (parentId: number) => {
  //       console.log('Fetched parent ID:', parentId);
  //       // You can store the fetched parent ID in a property here if needed
  //       // For example: this.parentId = parentId;
        
  //     },
  //     (error: any) => {
  //       console.error('Error fetching parent ID:', error);
  //     }
  //   );
  // }


  // Method to handle form submission
  onSubmit() {
    if (!this.childForm.valid) {
      // Handle validation error, e.g., show a message to the user
      console.log('Form is invalid. Please fill in all fields correctly.');
      return;
    }

    const parentId = 1; // Replace with the actual parent ID

    this.childrenService.addChildByParentId(parentId, this.child).subscribe(
      (response: any) => {
        console.log('Data posted successfully:', response);
        // // Optionally, you can reset the form data here
        // this.childForm.resetForm();

        this.router.navigate(['/user-children']);

        alert('Child registered successfully');


      },
      (error: any) => {
        console.error('Error posting data:', error);
      }
    );
  }
}
