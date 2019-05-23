import { Injectable } from '@angular/core';

import {Checkout} from'../models/checkout';

import { HttpClient, HttpHeaders , HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

 // public domain: String = "http://lapachamamasac.com/pachamama/";

 public domain: String = "http://pachamama.ourlimm.com/webservices/";

  constructor(private http: HttpClient) { 

  }

  enviarCorreoCompras(listaCheckout: Object, total: number , idpersona: number , correo:String) {
    let bodyString = JSON.stringify({ listaCheckout, total , idpersona ,correo});

    console.log(bodyString);

    console.log(bodyString);
    return this.http.post(`${this.domain}compra/enviarCorreoCompra`,bodyString,{headers: new HttpHeaders().set('Content-Type', 'application/json'),
    responseType: 'text'}).map(res => res);
    
  }
  



}




