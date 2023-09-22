import { Component, OnInit } from '@angular/core';
import { PaymentDetails } from 'src/app/classes/Payment';
import { LogedinService } from 'src/app/services/logedin.service';
import { PaymentService } from 'src/app/services/payment-service.service';

@Component({
  selector: 'app-user-viewallpayments',
  templateUrl: './user-viewallpayments.component.html',
  styleUrls: ['./user-viewallpayments.component.css']
})
export class UserViewallpaymentsComponent implements OnInit {

  constructor(private paymentService:PaymentService,private loggedInService:LogedinService) { }
  

  paymentDetail:PaymentDetails[]=[];
  ngOnInit(): void {
  }

  getPaymentsforUser(){
    this.paymentService.getPaymentsforUser(1).subscribe({
      next: (data) => {
        console.log(data);
        this.paymentDetail = data;
      }, // response from restController which sends success httpCode e.g 200
      error: (error) => {
        console.log(error);
      } // handle restControlleAdvice which sends error httpCode e.g 404
    });


}
}
