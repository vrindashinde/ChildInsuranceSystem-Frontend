import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDetails } from 'src/app/classes/Payment';
import { PaymentService } from 'src/app/services/payment-service.service';


declare var Razorpay:any;


@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {

  paymentDetail: PaymentDetails[] = [];

  constructor(private activatedRoute:ActivatedRoute,private paymentService: PaymentService,private router:Router) { }
  

  premium:number|any;
  amount:number|any;
  paymentDetails:PaymentDetails=new PaymentDetails();

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(

      {
        next: (params) => {
          this.premium = +params['premiumCalc'];
          console.log("got id - > "+this.premium);
        }
      }
    )
  }

  payment(payform:NgForm){
    
    this.amount= Math.round(this.premium);
    console.log(this.amount)
    this.paymentService.createTransaction(this.amount).subscribe({
      next:(response)=>{
        console.log(response);
        this.openTransactionModel(response,payform);
      },
      error:(error)=>{
        console.log('ereeeeooorrr',error);
      }
    });
    


  }
  
  openTransactionModel(response:any,payform:NgForm){
    var options={
      order_id: response.orderId,
      key: response.key,
      amount:response.amount,
      currency: response.currency,
      description:'payment done',
      handler:(repsonse:any)=>{
        if(repsonse!=null&& repsonse.razorpay_payment_id!=null){
        this.processResponse(repsonse,payform);
        }else{
          alert("Payment failed")
        }
      },
      prefill:{
        name:'Purvi', 
        email:'purviporwal01@gmail.com',
        contact:'123456789'
      },
      notes:{
        address:'premium'
      },
      theme:{
        color:'#F37524'
      }
    };

    var razorPayObject=new Razorpay(options);
    razorPayObject.open();
  }

  processResponse(resp:any,payform:NgForm){

    console.log('processresponse:',resp);
    this.paymentDetails.amountPaid=this.premium;
    this.paymentDetails.paymentDate=new Date();
    this.paymentDetails.enrollment_id=1;
    this.paymentDetails.paymentSuccessful=true;
    this.paymentDetails.razorPayOrderId = resp.razorpay_order_id;
    console.log(this.paymentDetails.paymentDate);

    console.log("inside paymentService:AddPayment()")
    console.log(this.paymentDetails);
     this.paymentService.addPayment(this.paymentDetails).subscribe({
        next: (data) => {
          console.log('data:',data);
          this.router.navigate(['userenrollmentsafterpayment']);
        }, // response from restController which sends success httpCode e.g 200
        error: (error) => {
          console.log(error);
        } // handle restControlleAdvice which sends error httpCode e.g 404
      });
  }
     

  

  navigateToEnrollment(){

    this.router.navigate(['userenrollmentsafterpayment']);

  } 
}
