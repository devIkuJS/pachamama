import { Injectable } from '@angular/core';
import { Moneda } from '../models/moneda';

import "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {
// public domain: String = "http://lapachamamasac.com/pachamama/";

 public domain: String = "http://pachamama.ourlimm.com/webservices/";

  constructor(private http: HttpClient) { }

  listarMoneda(){
    return this.http.get<Moneda[]>(`${this.domain}moneda/listarMoneda`).map(res => res);
    
    }
}
