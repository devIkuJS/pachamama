import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {LoginService} from '../services/login.service';

@Injectable()
export class AuthService implements CanActivate {

  constructor(public loginservice: LoginService, public router: Router) {}
  
   /* canActivate() {
      if (!this.loginservice.isLoggedin) {
        this.router.navigate(['/iniciar-sesion']);
        return false;
      }
      return true;
    } */

    canActivate(){
      if(this.loginservice.isLoggedin == true){
        console.log("esta logueado")
         return true;
     }else{
       console.log("no esta logueado")
         this.router.navigate(['/no-autenticado']);
         return false;
     }
 }
}
