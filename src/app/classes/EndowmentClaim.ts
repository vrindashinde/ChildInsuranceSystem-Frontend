

export class EndowmentClaim{

    constructor(public endowmentClaimId:number,  public  childAge: number,
        public approval:string, public claimDate:Date, public coverAmount:number,
        public customMessage:string,
        
        //new
        
        public viewDetails:boolean = false, 
      
        ){
    }

    get ViewDetails(): boolean {
        return this.viewDetails;
      }
 
      set ViewDetails(value: boolean) {
       
          this.viewDetails = value;
       
      }




    }