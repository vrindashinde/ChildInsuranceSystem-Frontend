import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { Parent } from '../classes/Parent';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn:boolean=false;
  userRole:string = "user";



getUserLoggedIn():boolean{
  return this.userLoggedIn
}

setUserLoggedIn(userLoggedIn:boolean):void{this.userLoggedIn = userLoggedIn}



///////////////
getUserRole():string{
  return this.userRole
}

setUserRole(userRole:string):void{this.userRole = userRole}





/////////

constructor(private http: HttpClient) { }


  login(parentlogin: Parent):Observable<any>{

    
    return this.http.post("http://localhost:8080/api/v1/user/parent/login", parentlogin);
    
  }



}



