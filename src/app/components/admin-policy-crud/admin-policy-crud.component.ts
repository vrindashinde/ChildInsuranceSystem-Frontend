import { Component, OnInit } from '@angular/core';
import { AddPolicyService } from 'src/app/services/add-policy.service';
import { FilterPoliciesService } from 'src/app/services/filter-policies.service';
@Component({
  selector: 'app-admin-policy-crud',
  templateUrl: './admin-policy-crud.component.html',
  styleUrls: ['./admin-policy-crud.component.css']
})
export class AdminPolicyCRUDComponent implements OnInit {
  isPopupVisible: boolean = false;
  id: number = 0;
  policyName: string = '';
  policyDuration: string = '';
  policyPrice: number = 0;
  claimType: string = '';
  multipleClaims: boolean = false;
  policies: any[] = [];
  policyIdFilter: string = '';
  filterText: string = '';
  policyId: any;

  constructor(private addPolicyService: AddPolicyService,private filterPolicies: FilterPoliciesService) { }
  ngOnInit() {
    this.getPolicies();
  }

  addPolicy() {
    const policyData = {
      id: this.id,
      policyName: this.policyName,
      policyDuration: parseInt(this.policyDuration),
      policyPrice: parseFloat(this.policyPrice.toString()),
      claimType: this.claimType,
      multipleClaims: this.multipleClaims,
    };
    this.addPolicyService.addPolicy(policyData).subscribe(
      (response: any) => {
        console.log('Policy added successfully:', response);
      },
      (error: any) => {
        console.error('Error adding policy:', error);
      }
    );
  }
  
  getPolicies() {
    this.addPolicyService.getPolicies().subscribe(
      (data: any) => {
        this.policies = data;
      },
      (error: any) => {
        console.error('Error fetching policies:', error);
      }
    );   
  }
  applyFilter() {
    this.policies = this.filterPolicies.filterpolicies(this.policies, this.policyIdFilter);
  }
}







