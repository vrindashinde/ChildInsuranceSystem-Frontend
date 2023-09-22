

export class HealthClaim{

    constructor(public incidenceDate:Date | any,
        public hospitalName:string,public roomCategory:string, public reason:string,
        public admitDate:Date | any, public dischargeDate:Date | any, public preHospitalExpenses:number,
        public hospitalExpenses:number,public postHospitalExpenses:number,
        public ambulanceExpenses:number, public claimDate:Date | any, public approval:string
        ,public claimStatusDate:Date | any, public customMessage:string,
        
        //new
        
        public viewDetails:boolean = false ,
        public totalExpenses:number,
        public healthClaimId?:number | any
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