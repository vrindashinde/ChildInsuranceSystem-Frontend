import { Component, OnInit } from '@angular/core';
import { HealthClaim } from 'src/app/classes/HealthClaim';
import { BackendHealthClaimService } from 'src/app/services/backend-health-claim.service';
import { DatePipe } from '@angular/common';
import { ViewChildForAdmin } from 'src/app/classes/ViewChildForAdmin';
import { LogedinService } from 'src/app/services/logedin.service';
import { BackendAdminClaimApprovalService } from 'src/app/services/backend-admin-claim-approval.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-claim',
  templateUrl: './health-claim.component.html',
  styleUrls: ['./health-claim.component.css']
})
export class HealthClaimComponent implements OnInit {

  message:string="";
  errorMessage: string ="";
  child: ViewChildForAdmin={
    childId: 0,
    childName: '',
    childUID: ''
  };

  ParentData:any;
  Childeren:any;

  ChildId:number=0;

  Enrollment:any;

  EnrollmentFound:boolean=false;

  ClaimNow:boolean=false;

  healthClaim:HealthClaim = new HealthClaim(new Date('12-12-2023'), "", '', "", new Date('12-12-2023'), new Date('12-12-2023'), 0, 0, 0, 0, new Date('12-12-2023'), "Verifying", new Date('12-12-2023'), "", false, 0);

  constructor(private backendHealthClaimService:BackendHealthClaimService,
    private datePipe: DatePipe, private getChildService: BackendAdminClaimApprovalService, private localStorage:LogedinService, private router: Router) { }

  ngOnInit(): void {
    this.getChilderen()
   
  }


////////Load Childeren/////////
getChilderen(){
  this.EnrollmentFound=false;
  console.log(JSON.parse(this.localStorage.getData()));
  this.ParentData = JSON.parse(this.localStorage.getData());
  

  this.getChildService.getAllChilderenByParentId(this.ParentData.parentId)
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

/////////////////////////

GetEnrollments(childId:number,policyId:number){



  this.getChildService.getAllActiveEnrollments(childId,policyId)
  .subscribe({

   next:(data)=>{
     console.log(data);
     this.Enrollment=data;
     this.message="Fetched Enrollment";
     this.errorMessage="";
     this.EnrollmentFound= true;
     this.ChildId = childId;
   },        //Response from restcontroller which sends success httpCode eg 200
   error:(error)=>{
     console.log(error)
     this.message="";
     this.errorMessage=error;
this.EnrollmentFound = false;
this.ClaimNow = false;


     alert(error.error)
   }       //handle restControllerAdvice which sends error httpCode eg 404

  });

}
/////ENROLLMENT FOUND?///////

enrollmentFound(){
  return this.EnrollmentFound
}

///////CLaim Now//////

claimNow(){
 this.ClaimNow = true;
}


//////////////////////////////


  formattedDate(date:Date) {

   
    return this.datePipe.transform(date, 'dd-MM-yyyy');
  }






  addHealthClaim()

  {
    this.healthClaim.admitDate = this.formattedDate(this.healthClaim.admitDate);
    this.healthClaim.dischargeDate = this.formattedDate(this.healthClaim.dischargeDate);
    this.healthClaim.claimDate = this.formattedDate(this.healthClaim.claimDate);
 
    this.healthClaim.incidenceDate = this.formattedDate(this.healthClaim.incidenceDate);
    this.healthClaim.claimStatusDate = this.formattedDate(this.healthClaim.claimStatusDate);
    this.healthClaim.claimDate=this.formattedDate(new Date());
    
    
    console.log(this.healthClaim.claimDate);
  
   


   this.backendHealthClaimService.postHealthClaim(this.healthClaim,this.ChildId)
   .subscribe({

    next:(data)=>{
      console.log(data);
      this.message="Health Claim Added";
      this.errorMessage="";
      this.router.navigate(['/user-claims']);
    },        //Response from restcontroller which sends success httpCode eg 200
    error:(error)=>{
      console.log(error)
      this.message="";
      this.errorMessage="Health Claim Not Added";
    }       //handle restControllerAdvice which sends error httpCode eg 404

   });



  }



}
