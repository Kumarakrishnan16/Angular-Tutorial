import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  
   things="bottel"

   kill(){
    return "im From Service Component"
   }
}
