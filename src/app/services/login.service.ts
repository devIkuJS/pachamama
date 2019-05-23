import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { tokenNotExpired } from 'angular2-jwt';
//import { Http , Headers} from '@angular/http';

declare var isRemberMeChecked:any;

@Injectable({
  providedIn: 'root'
})
export class LoginService  {

    isLoggedin : boolean;
    authToken: any;
    usuario: any;
  
  public domain: String = "http://pachamama.ourlimm.com/webservices/";

    constructor(private http: HttpClient) { 
        this.isLoggedin = false;
    }
  
  
      login(usuario){
        return this.http.post(`${this.domain}login`,usuario, {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'}).map(res => res);
      }
    
      getProfile(id){
        return this.http.post(`${this.domain}login/obtenerToken`,id, {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'}).map(res => res);
      }
    
     /* loadToken(){
        const token = localStorage.getItem('id_token');
        this.authToken = token;
        this.isLoggedin = true;
      } */

      estadoLogin(){
        var auxSession = localStorage.getItem("datosperfil");
        if(auxSession){
          this.isLoggedin = true;
        }else{
          this.isLoggedin = false;
        }
      } 
    
     /* storeUserData(token, usuario){
        localStorage.setItem('id_token',token);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.authToken = token;
        this.usuario = usuario;
      } */
      getLocalStorageInfo(){
        var auxSession = localStorage.getItem("datosperfil");
        var usuario = JSON.parse(auxSession);
        return usuario;
       
      }
    
    
   /*   loggedIn() : boolean{
        
        return tokenNotExpired('id_token');
      } */ 
    
     /* logout(){
        this.authToken = null;
        this.usuario= null;
        this.isLoggedin = false;
        localStorage.clear();
      } */

      logout(){
        this.isLoggedin = false;
        localStorage.clear();
      } 

      recupPass(pass){
        return this.http.post(`${this.domain}login/recuperarPass`,pass, {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'}).map(res => res);
      }


      cambiarPass(pass){
        return this.http.post(`${this.domain}login/cambiarPass`,pass, {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'}).map(res => res);
      }


      actualizarPerfil(datos){
        return this.http.post(`${this.domain}login/actualizarPerfil`,datos, {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'}).map(res => res);
      }

    

    
    
    
}
