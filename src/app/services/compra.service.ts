import { Injectable } from '@angular/core';

import "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

 //public domain: String = "http://lapachamamasac.com/pachamama/";

 public domain: String = "http://pachamama.ourlimm.com/webservices/";

  constructor(private http: HttpClient) { }


  listarCompra(idpersona){
    return this.http.post(`${this.domain}compra/listaCompra`,idpersona,
    {headers: new HttpHeaders().set('Content-Type', 'application/json'),
    responseType: 'text'}).map(res => res);  
    
    }

    listarDetalleCompra(idcompra){
      return this.http.post(`${this.domain}compra/detalleCompra`,idcompra,
      {headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'}).map(res => res);  
      
      }
}
