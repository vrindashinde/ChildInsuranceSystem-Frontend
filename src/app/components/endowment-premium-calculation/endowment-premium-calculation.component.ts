import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment-service.service';



@Component({
  selector: 'app-endowment-premium-calculation',
  templateUrl: './endowment-premium-calculation.component.html',
  styleUrls: ['./endowment-premium-calculation.component.css']
})
export class EndowmentPremiumCalculationComponent implements OnInit {

  constructor(private paymentService:PaymentService, private router:Router) {
  }
  cover: number | any;
  duration: number | any;
  age: number | any;
  annual_income: number | any;
  income_factor: number | any;
  gender: string = '';
  baseRateCalc: number | any;
  ageCalc: number | any;
  incomeCalc: number | any;
  genderCalc: number | any;
  premium: number | any;
  final_premium:number|any;


  ngOnInit(): void {
  }
  calculatePremium():number {
    selectedCover:Number;
    selectedYears:Number;
    const selectedYears = parseInt( this.duration,10);
    const selectedCover=  parseInt( this.cover,10);
    const DurationCorrection=18-this.age;

   if(this.age+selectedYears>18){
    alert("you cannot buy a policy of more than "+DurationCorrection+" years.Please choose an alterante year policy")
   }
   else{
    
    if (this.age <= 18) {
      if (selectedYears === 3|| selectedYears===5||selectedYears==10) {
        if(selectedCover === 3){
          this.baseRateCalc = (100000*selectedCover)/selectedYears ;
          this.ageCalc = this.age * 100;
          this.incomeCalc = (0.001 * this.annual_income) ;
          this.genderCalc = 0;
          this.premium = this.baseRateCalc + this.ageCalc + this.incomeCalc + this.genderCalc;
          let final_premium= Math.round(this.premium);
          console.log('duration:',selectedYears);
          console.log('base rate:',this.baseRateCalc);
          console.log('age_calc:',this.ageCalc);
          console.log('income_calc:',this.incomeCalc);

          console.log('premium:', final_premium);
        }
        else if(selectedCover===5){
          this.baseRateCalc = (100000*this.cover)/this.duration;
          this.ageCalc = this.age * 100;
          this.incomeCalc = (0.01 * this.annual_income) ;
          this.genderCalc = 0;
          this.premium = this.baseRateCalc + this.ageCalc + this.incomeCalc + this.genderCalc;
          let final_premium= Math.round(this.premium);
          console.log('duration:',selectedYears);
          console.log('base rate:',this.baseRateCalc);
          console.log('age_calc:',this.ageCalc);
          console.log('income_calc:',this.incomeCalc);

          console.log('premium:', final_premium);
        }
        else if(selectedCover===10){
          this.baseRateCalc = (100000*this.cover)/this.duration;
          this.ageCalc = this.age * 100;
          this.incomeCalc = (0.01 * this.annual_income) ;
          this.genderCalc = 0;
          this.premium = this.baseRateCalc + this.ageCalc + this.incomeCalc + this.genderCalc;
          let final_premium= Math.round(this.premium);
          console.log('duration:',selectedYears);
          console.log('base rate:',this.baseRateCalc);
          console.log('age_calc:',this.ageCalc);
          console.log('income_calc:',this.incomeCalc);

          console.log('premium:', final_premium);
        }

    
        }
    }
    else {
      this.final_premium = 0;
    }
  }
   
    return this.premium;


   }
  

 

  navigateToPayment(){
    this.router.navigate(['payment/',this.premium]);
  }

  

  




      
  }



