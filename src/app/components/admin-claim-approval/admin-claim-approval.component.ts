import { Component, OnInit } from '@angular/core';
import { EducationClaim } from 'src/app/classes/EducationClaim';
import { HealthClaim } from 'src/app/classes/HealthClaim';
import { ViewChildForAdmin } from 'src/app/classes/ViewChildForAdmin';
import { BackendAdminClaimApprovalService } from 'src/app/services/backend-admin-claim-approval.service';

@Component({
  selector: 'app-admin-claim-approval',
  templateUrl: './admin-claim-approval.component.html',
  styleUrls: ['./admin-claim-approval.component.css']
})
export class AdminClaimApprovalComponent implements OnInit {
  healthClaim:HealthClaim[]=[];
  educationClaim:EducationClaim[]=[];

  child: ViewChildForAdmin= new ViewChildForAdmin(0,"","");
  approve:any={approval:"", customMessage:""};
  message="";
  errorMessage="";
  claimType="HealthClaim";
  claimId:number=0;

  indexCount:number = 0;

  constructor(private AdminClaimService: BackendAdminClaimApprovalService) { }

  ngOnInit(): void {

    this.loadAllHealthClaimstoComponent();
    this.loadAllEducationClaimstoComponent()

  }

////Toggle Claim Type/////

toggleClaimType(){

  if(this.claimType=="HealthClaim"){
    this.claimType="EducationClaim"
  }
  else{
    this.claimType="HealthClaim"
  }
}

/////////Load Claims To Components////////

  loadAllHealthClaimstoComponent(){
    this.AdminClaimService.getAllPendingHealthClaims().
    subscribe(
      {
        next:(data
          
          
          ) => {console.log(data); 
          this.healthClaim = data; 

          for (const i in this.healthClaim) {
          
          this.healthClaim[i].viewDetails = false;
          this.healthClaim[i].totalExpenses = 
          this.healthClaim[i].preHospitalExpenses +
          this.healthClaim[i].hospitalExpenses +
          this.healthClaim[i].postHospitalExpenses +
          this.healthClaim[i].ambulanceExpenses;

          }
          
console.log(this.healthClaim)
          ;
        },
        error: (error) => {console.log(error);},
        complete: () => {console.log("Loaded all data")}

      }
    )
  }



  loadAllEducationClaimstoComponent(){
    this.AdminClaimService.getAllPendingEducationClaims().
    subscribe(
      {
        next:(data) => {console.log(data); this.educationClaim = data;
          for (const i in this.educationClaim) {
          this.educationClaim[i].viewDetails = false;
          this.educationClaim[i].totalExpenses=
         this.educationClaim[i].annualFee+
        this.educationClaim[i].transport+
          this.educationClaim[i].material
          }
        ;
        },
        error: (error) => {console.log(error);},
        complete: () => {console.log("Loaded all data")}

      }
    )
  }








///////Start Approve or Decline Health Claim/////
  approveHealthClaim(claimId:number,message:string){
   
this.approve = {approval:"Approved", customMessage:message};
    this.AdminClaimService.approveHealthClaim(this.approve,claimId)
    .subscribe({
 
     next:(data)=>{
       console.log(data);
       this.message="Approved";
       this.errorMessage="";
       this.loadAllHealthClaimstoComponent();
     },        //Response from restcontroller which sends success httpCode eg 200
     error:(error)=>{
       console.log(error)
       this.message="";
       this.errorMessage="There seems to be some error. Please contact the IT team";
     }       //handle restControllerAdvice which sends error httpCode eg 404
 
    });

  }



  declineHealthClaim(claimId:number,message:string){

    this.approve = {approval:"Declined", customMessage:message};
        this.AdminClaimService.approveHealthClaim(this.approve,claimId)
        .subscribe({
     
         next:(data)=>{
           console.log(data);
           this.message="Declined";
           this.errorMessage="";
           this.loadAllHealthClaimstoComponent();
         },        //Response from restcontroller which sends success httpCode eg 200
         error:(error)=>{
           console.log(error)
           this.message="";
           this.errorMessage="There seems to be some error. Please contact the IT team";
         }       //handle restControllerAdvice which sends error httpCode eg 404
     
        });
    
      }

///// End Of Approve Or Decline Health Claim//////


/////Start of Approve Or Decline Eduaction Claim//////////////


approveEducationClaim(claimId:number,message:string){
   
  this.approve = {approval:"Approved", customMessage:message};
      this.AdminClaimService.approveEducationClaim(this.approve,claimId)
      .subscribe({
   
       next:(data)=>{
         console.log(data);
         this.message="Approved";
         this.errorMessage="";
         this.loadAllEducationClaimstoComponent();
       },        //Response from restcontroller which sends success httpCode eg 200
       error:(error)=>{
         console.log(error)
         this.message="";
         this.errorMessage="There seems to be some error. Please contact the IT team";
       }       //handle restControllerAdvice which sends error httpCode eg 404
   
      });
  
    }




  declineEducationClaim(claimId:number,message:string){

    this.approve = {approval:"Declined", customMessage:message};
        this.AdminClaimService.approveEducationClaim(this.approve,claimId)
        .subscribe({
     
         next:(data)=>{
           console.log(data);
           this.message="Declined";
           this.errorMessage="";
           this.loadAllEducationClaimstoComponent();
         },        //Response from restcontroller which sends success httpCode eg 200
         error:(error)=>{
           console.log(error)
           this.message="";
           this.errorMessage="There seems to be some error. Please contact the IT team";
         }       //handle restControllerAdvice which sends error httpCode eg 404
     
        });
    
      }








///// End Of Approve Or Decline Education Claim//////




///////////////View Health Claim Details///////////////////


  viewHealthClaimDetails(index:number,id:number){
    if(this.healthClaim[index].ViewDetails != true){
      this.healthClaim[index].ViewDetails = true

///

this.AdminClaimService.getChildByHealthClaim(id).
    subscribe(
      {
        next:(data) => {console.log(data); 

          this.child = data; 
console.log(this.child)
          ;
        },
        error: (error) => {console.log(error);},
        complete: () => {console.log("Loaded all data")}

      }
    )

////

  }
    else{
      this.healthClaim[index].ViewDetails = false
   

    }
  }


  ////////End Health Claim Details//////


  //////// Start Education Claim Details//////

  viewEducationClaimDetails(index:number){
    if(this.educationClaim[index].ViewDetails != true){
      this.educationClaim[index].ViewDetails = true
  }
    else{
      this.educationClaim[index].ViewDetails = false
   

    }
  }
////////////End Education Claim Details////////

}
