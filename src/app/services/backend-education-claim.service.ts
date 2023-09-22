import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendEducationClaimService {

  constructor(private httpClient:HttpClient) { }

  getEducationClaims():Observable<any>{
    return this.httpClient.get("http://localhost:8090/api/v1/educationclaims/1",{responseType:"json"});
  }
 

}
