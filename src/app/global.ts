import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

  public showloader: boolean = false; 
  public pageSize: number = 9 ;

  moneda: String = "USD";
  cambioMoneda: Number = 0;
  monedaWC: String = "WC";
  cambioMonedaWC: Number = 0;


}

