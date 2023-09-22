import { Component } from '@angular/core';

@Component({
  selector: 'app-user-policy',
  templateUrl: './user-policy.component.html',
  styleUrls: ['./user-policy.component.css']
})
export class UserPolicyComponent {

  enrollPolicy(policyName: string) {
    console.log(`Enrolled in ${policyName} policy.`);
  }

}
