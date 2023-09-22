import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentDetails } from '../classes/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  

  public createTransaction(amount:number):Observable<any>{
    return this.httpClient.get("http://localhost:8090/api/v1/user/createTransaction/"
      + amount);
  }

  public addPayment(payment:PaymentDetails):Observable<any>{
    //const payId = 52;
    return this.httpClient.post("http://localhost:8090/api/v1/user/payment/2",payment,{responseType:'json'});
  }
  public getPayments():Observable<any>{
    return this.httpClient.get("http://localhost:8090/api/v1/user/getall",{responseType:'json'});
  }

  
  public getPaymentsforUser(enrollment_id:number):Observable<any>{
    return this.httpClient.get("http://localhost:8090/api/v1/user/payments/"+enrollment_id,{responseType:'json'});
  }


   
}
