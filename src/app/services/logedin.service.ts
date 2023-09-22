import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogedinService {
  data:any;
  constructor(  
  ) { }
  getData():any{

    return localStorage.getItem('userDetails');

  }

setData(data:any):void{
  this.data = data;
  localStorage.setItem('userDetails',JSON.stringify(this.data))

}


}





