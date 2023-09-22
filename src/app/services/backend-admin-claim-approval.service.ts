import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HealthClaim } from '../classes/HealthClaim';
import { EducationClaim } from '../classes/EducationClaim';

@Injectable({
  providedIn: 'root'
})
export class BackendAdminClaimApprovalService {

  constructor(private httpClient:HttpClient) { }



  getAllHealthClaims():Observable<any>{
    return this.httpClient.get("http://localhost:8090/api/v1/healthclaims",{responseType:"json"});
  }

  getAllPendingHealthClaims():Observable<any>{
    return this.httpClient.get("http://localhost:8090/api/v1/healthclaims/pending",{responseType:"json"});
  }

  approveHealthClaim(approveHealthClaim:HealthClaim,claimId:number):Observable<any>{
    return this.httpClient.patch(`http://localhost:8090/api/v1/healthclaim/approve/${claimId}`,approveHealthClaim);
  }

  getChildByHealthClaim(claimId:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8090/api/v1/healthclaim/child/${claimId}`,{responseType:"json"});
  }


//////////////
  getAllEducationClaims():Observable<any>{
    return this.httpClient.get("http://localhost:8090/api/v1/educationclaims",{responseType:"json"});
  }



  getAllPendingEducationClaims():Observable<any>{
    return this.httpClient.get("http://localhost:8090/api/v1/educationclaims/pending",{responseType:"json"});
  }


  approveEducationClaim(approveEducationClaim:EducationClaim,claimId:number):Observable<any>{
    return this.httpClient.patch(`http://localhost:8090/api/v1/educationclaim/approve/${claimId}`,approveEducationClaim);
  }


  getEducationClaimByChild():Observable<any>{
    return this.httpClient.get("http://localhost:8090/api/v1/educationclaims/child/1",{responseType:"json"});
  }
 
///////////////

getEndowmentClaimBychild():Observable<any>{
  return this.httpClient.get("http://localhost:8090/api/v1/endowmentclaims/1",{responseType:"json"});
}


/////////Get Child By Parent/////////

getAllChilderenByParentId(parentId:number):Observable<any>{
  return this.httpClient.get(`http://localhost:8090/api/v1/parents/${parentId}/children/getAllChildren/`,{responseType:"json"});
}



///////Check Active Enrollments for Claims////////



getAllActiveEnrollments(childId:number,policyId:number):Observable<any>{
  return this.httpClient.get(`http://localhost:8090/api/v1/enrollments/${childId}/${policyId}`,{responseType:"json"});
}



}

