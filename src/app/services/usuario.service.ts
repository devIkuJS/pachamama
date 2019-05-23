import { Injectable } from '@angular/core';
//import { Persona } from '../models/persona';
import "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 //  public domain: String = "http://lapachamamasac.com/pachamama/";

 public domain: String = "http://pachamama.ourlimm.com/webservices/";
  
    constructor(private http: HttpClient) { }
  
    registrarPersona(persona){
  
  //return this.http.post(`${this.domain}registro/persona`,persona,{headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})}).map(res => res);
  return this.http.post(`${this.domain}registro/persona`,persona,
  {headers: new HttpHeaders().set('Content-Type', 'application/json'),
  responseType: 'text'}).map(res => res); 
  
  }
}
