import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendAdminClaimApprovalService } from 'src/app/services/backend-admin-claim-approval.service';
import { GetEnrollmentsService } from 'src/app/services/get-enrollment.service';
import { LogedinService } from 'src/app/services/logedin.service';

@Component({
  selector: 'app-user-enrollment',
  templateUrl: './user-enrollment.component.html',
  styleUrls: ['./user-enrollment.component.css']
})
export class UserEnrollmentComponent {
  enrollmentForm: FormGroup;
  endDate: Date | null = null;



  //Vrinda var

  message:string="";
  errorMessage: string ="";
  

  ParentData:any;
  Childeren:any;

  ChildId:number=0;

  Enrollment:any;

  EnrollmentFound:boolean=false;

  ClaimNow:boolean=false;

GetEnrollment:any ={policyId:0,childId:0};

 


  //

  constructor(private fb: FormBuilder,private router:Router, private localStorage:LogedinService,  private getChildService: BackendAdminClaimApprovalService, private getEnrollment:GetEnrollmentsService) {
    this.enrollmentForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      childDob: [''],
      childGender: [''],
      relationship: [''],
      policyEnrollments: [''],
      status: [''],
    });
  }

  onSubmit() {
    const formData = this.enrollmentForm.value;
    formData.status = 'PAYMENTPENDING';
    
  }



  navigateToPremiumCalc(){

    this.router.navigate(['premium/']);

  } 




  getChilderen(){
    this.EnrollmentFound=false;
    console.log(JSON.parse(this.localStorage.getData()));
    this.ParentData = JSON.parse(this.localStorage.getData());
    
  
    this.getEnrollment.getChilderen(this.GetEnrollment.childId,this.GetEnrollment.policyId)
    .subscribe({
  
     next:(data)=>{
       console.log(data);
       this.Childeren=data;
       this.message="Fetched Childeren";
       this.errorMessage="";
       this.EnrollmentFound = false;
    
     },        //Response from restcontroller which sends success httpCode eg 200
     error:(error)=>{
       console.log(error)
       this.message="";
       this.errorMessage="Error";
     }       //handle restControllerAdvice which sends error httpCode eg 404
  
    });
  
  }


}

