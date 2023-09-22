import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { Parent } from '../classes/Parent';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn:string="false";
  userRole:string = "user";
  register:string = "false";



/////
getUserLoggedIn():string | any{

  return localStorage.getItem('userLoggedIn')

}

 

setUserLoggedIn(userLoggedIn:string):void{

  this.userLoggedIn = userLoggedIn

localStorage.setItem('userLoggedIn',(this.userLoggedIn))

}

logout(){
  localStorage.removeItem('userLoggedIn')
  localStorage.removeItem('userRole')
}



////////
getRegister():string | any{
  return localStorage.getItem('register')
}

setRegister(register:string):void{
  this.register = register
  localStorage.setItem('register',(this.register))
}


///////////////
getUserRole():string| any{

  return localStorage.getItem('userRole')

}

 

setUserRole(userRole:string):void{

  this.userRole = userRole

localStorage.setItem('userRole',(this.userRole))

 

}

//////////////

constructor(private http: HttpClient) { }


  login(parentlogin: Parent):Observable<any>{

    
    return this.http.post("http://localhost:8090/api/v1/user/parent/login", parentlogin);
    
  }



}



