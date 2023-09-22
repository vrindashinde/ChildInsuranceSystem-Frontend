import { Component, OnInit } from '@angular/core';
import { EducationClaim } from 'src/app/classes/EducationClaim';
import { EndowmentClaim } from 'src/app/classes/EndowmentClaim';
import { HealthClaim } from 'src/app/classes/HealthClaim';
import { BackendEducationClaimService } from 'src/app/services/backend-education-claim.service';
import { BackendEndowmentClaimService } from 'src/app/services/backend-endowment-claim.service';
import { BackendHealthClaimService } from 'src/app/services/backend-health-claim.service';

@Component({
  selector: 'app-user-claim',
  templateUrl: './user-claim.component.html',
  styleUrls: ['./user-claim.component.css']
})
export class UserClaimComponent implements OnInit {

  educationClaim:EducationClaim[]=[];
  healthClaim:HealthClaim[]=[];
  endowmentClaim:EndowmentClaim[]=[];

  indexCount:number = 0;
  childId:number = 1;

  constructor(private backendHealthClaimService: BackendHealthClaimService, 
    private backendEducationClaimService: BackendEducationClaimService,
    private backendEndowmentClaimService: BackendEndowmentClaimService
    ) { }

  ngOnInit(): void {

    this.loadAllHealthClaimstoComponent();
    this.loadAllEducationClaimstoComponent();
    this.loadAllEndowmentClaimstoComponent();
  

  }
// Load Claims To Component
  loadAllHealthClaimstoComponent(){
    this.backendHealthClaimService.getHealthClaims(this.childId).
    subscribe(
      {
        next:(data) => {console.log(data); 

          this.healthClaim = data; 
          this.indexCount = this.healthClaim.length-1;
          this.healthClaim[this.indexCount].viewDetails = false;
          this.healthClaim[this.indexCount].totalExpenses = 
          this.healthClaim[this.indexCount].preHospitalExpenses +
          this.healthClaim[this.indexCount].hospitalExpenses +
          this.healthClaim[this.indexCount].postHospitalExpenses +
          this.healthClaim[this.indexCount].ambulanceExpenses;

          ;
        },
        error: (error) => {console.log(error);},
        complete: () => {console.log("Loaded all data")}

      }
    )
  }

  loadAllEducationClaimstoComponent(){
    this.backendEducationClaimService.getEducationClaims().
    subscribe(
      {
        next:(data) => {console.log(data); this.educationClaim = data;
          this.indexCount = this.educationClaim.length-1;
          this.educationClaim[this.indexCount].viewDetails = false;
          this.educationClaim[this.indexCount].TotalExpenses=
          this.educationClaim[this.indexCount].annualFee+
          this.educationClaim[this.indexCount].transport+
          this.educationClaim[this.indexCount].material;

        
        },
        error: (error) => {console.log(error);},
        complete: () => {console.log("Loaded all data")}

      }
    )
  }


  loadAllEndowmentClaimstoComponent(){
    this.backendEndowmentClaimService.getEndowmentClaims().
    subscribe(
      {
        next:(data) => {console.log(data); this.endowmentClaim = data;
          this.indexCount = this.endowmentClaim.length-1;
          this.endowmentClaim[this.indexCount].viewDetails = false;
        
        },
        error: (error) => {console.log(error);},
        complete: () => {console.log("Loaded all data")}

      }
    )
  }                                                                                                                                                                                                                                

//////////////////////


//View Claim Details
  viewEducationClaimDetails(index:number){
    if(this.educationClaim[index].ViewDetails != true){
      this.educationClaim[index].ViewDetails = true
  }
    else{
      this.educationClaim[index].ViewDetails = false
   

    }
  }


  viewHealthClaimDetails(index:number){
    if(this.healthClaim[index].ViewDetails != true){
      this.healthClaim[index].ViewDetails = true
  }
    else{
      this.healthClaim[index].ViewDetails = false
   

    }
  }


  viewEndowmentClaimDetails(index:number){
    if(this.endowmentClaim[index].ViewDetails != true){
      this.endowmentClaim[index].ViewDetails = true
  }
    else{
      this.endowmentClaim[index].ViewDetails = false
   

    }
  }

//////////////////

}
