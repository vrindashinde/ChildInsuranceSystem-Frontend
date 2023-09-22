

export class EducationClaim{

    constructor(
      public instituteName:string,public annualFee:number,public transport:number,public material:number,
      public claimDate:Date, public approval:string, public claimStatusDate:Date, public customMessage:string, 
        //new
        
        public viewDetails:boolean = false,
        public totalExpenses:number,
        public educationClaimId?:number | any,

        
        
        ){
    }


    get ViewDetails(): boolean {
        return this.viewDetails;
      }
 
      set ViewDetails(value: boolean) {
       
          this.viewDetails = value;
       
      }


      get TotalExpenses(): number {
        return this.totalExpenses;
      }
 
      set TotalExpenses(value: number) {
       
          this.totalExpenses = value;
       
      }







    }