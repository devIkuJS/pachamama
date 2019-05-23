import { Injectable } from '@angular/core';
import "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

 // public domain: String = "http://lapachamamasac.com/pachamama/";

  public domain: String = "http://pachamama.ourlimm.com/webservices/";

  constructor(private http: HttpClient) { }


  enviarSuscripcion(correo){
    return this.http.post(`${this.domain}index/enviarSuscripcion`,correo, {headers: new HttpHeaders().set('Content-Type', 'application/json'),
    responseType: 'text'}).map(res => res);
  }

  enviarContacto(contenido){
    return this.http.post(`${this.domain}index/enviarContacto`,contenido, {headers: new HttpHeaders().set('Content-Type', 'application/json'),
    responseType: 'text'}).map(res => res);
  }
}
