import { Component, OnInit } from '@angular/core';
import { PaymentDetails } from 'src/app/classes/Payment';
import { PaymentService } from 'src/app/services/payment-service.service';


@Component({
  selector: 'app-admin-view-payments',
  templateUrl: './admin-view-payments.component.html',
  styleUrls: ['./admin-view-payments.component.css']
})
export class AdminViewPaymentsComponent implements OnInit {

  constructor(private paymentService:PaymentService) { }

  paymentDetail:PaymentDetails[]=[];
  ngOnInit(): void {
    this.viewAllPayments();
  }

  viewAllPayments(){
  this.paymentService.getPayments().subscribe({
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
