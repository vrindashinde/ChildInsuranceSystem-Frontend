import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-my-enrollments',
  templateUrl: './user-my-enrollments.component.html',
  styleUrls: ['./user-my-enrollments.component.css']
})
export class UserEnrollmentsAfterpaymentComponent  {

  enrollmentForm: FormGroup;
  
  startDate: string = '';
  endDate:string='';
  message: string = ''; 
  constructor(private fb: FormBuilder) {
    this.enrollmentForm = this.fb.group({
      // firstName: [''],
      // lastName: [''],
      // childDob: [''],
      // childGender: [''],
      // relationship: [''],
      policyDuration: [null, Validators.required],
      // policyEnrollments: [''],
      status: [''],
      startDate:[''],
      endDate:[''],
    });
  }
  
  
  onSubmit() {
  if (this.enrollmentForm.valid) {
    
    const startDate = new Date();
    this.startDate = startDate.toISOString().split('T')[0];
      
    const policyDurationControl = this.enrollmentForm.get('policyDuration');
    if (policyDurationControl) {
      const policyDuration = policyDurationControl.value;

     
      const endDate = new Date(startDate);
      endDate.setFullYear(startDate.getFullYear() + Number(policyDuration));
      this.endDate = endDate.toISOString().split('T')[0];
     
      // this.endDate = endDate;

      this.message = 'You will have to renew your policy once your policy gets expired!!!';
      const formData = this.enrollmentForm.value;
      // formData.status = 'Active';
      // formData.endDate = this.endDate.toISOString().split('T')[0];
      formData.startDate = new Date().toISOString().split('T')[0];
      // formData.message = 'You will have to renew your policy';
      console.log('Form Data:', this.enrollmentForm.value);
      console.log('Start Date:', startDate.toISOString().split('T')[0]);
      console.log('End Date:', endDate.toISOString().split('T')[0]);
      console.log('Account Activated');
      alert('Account is activated');

    }
  } else {
    alert('Please fill out all required fields correctly.');
  }
}

}
