export class PaymentDetails{
    // payment_id:number;
    // amount_paid:number;
    // payment_date: string;
    // payment_successfull:boolean;
    // enrollment_id:number;

    constructor(public paymentId?:string,public amountPaid?:number,public paymentDate?:Date,
        public paymentSuccessful?:boolean,public enrollment_id?:number,public razorPayOrderId?:string){
        // this.payment_id=payment_id;
        // this.amount_paid=amount_paid;
        // this.payment_date=payment_date;
        // this.payment_successfull=payment_successful;
        // this.enrollment_id=enrollment_id;
       

    }

}
