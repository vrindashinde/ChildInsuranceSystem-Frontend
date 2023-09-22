import { Injectable } from '@angular/core';
import { AdminPolicyCRUDComponent } from '../components/admin-policy-crud/admin-policy-crud.component';

@Injectable({
  providedIn: 'root'
})
export class FilterPoliciesService {
  filterpolicies(policies: AdminPolicyCRUDComponent[], policyIdFilter: string): AdminPolicyCRUDComponent[] {
    if (!policyIdFilter || policyIdFilter.trim() === '') {
      return policies; 
    }

    const filteredPolicyId = policyIdFilter.toLowerCase();
    return policies.filter(policy => policy.policyId.toString().toLowerCase().includes(filteredPolicyId));
  }
  
}
