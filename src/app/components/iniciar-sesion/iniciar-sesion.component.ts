import { Component, OnInit } from '@angular/core';

import {LoginService} from '../../services/login.service';

import {Router} from '@angular/router';

//import { CookieService, CookieOptions } from 'angular2-cookie/core';

import swal from 'sweetalert2';




@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  public correo: String;

  public clave: String; 

 // public rememberme: any;
  public correoac: String;


/*
  constructor(public loginservice: LoginService , public router: Router , public _cookieService:CookieService) { 
   
    if(this._cookieService.get('rememberme')) {
      this.correo=this._cookieService.get('correo');
      this.rememberme=this._cookieService.get('rememberme');
   }
   
  }
  */

  constructor(public loginservice: LoginService , public router: Router ) {  }

  ngOnInit() {
  }


  ingresar(){
    
        let usuario = {correo:this.correo, clave:this.clave};
         
        this.loginservice.login(usuario).subscribe(data => {
          
          var auth= JSON.parse(data);
    
          if(auth["success"] == true){
            localStorage.setItem("datosperfil", JSON.stringify(auth["user"]));
            this.loginservice.estadoLogin();
         /*   this._cookieService.put('correo',auth["user"]["correo"]);
            this._cookieService.put('rememberme',this.rememberme); */

            this.router.navigate(['/perfil']);
             // return false;
          }else{

           swal({
            type: 'error',
            title: 'Oops...',
            text: 'Datos incorrectos!'
          })
            return false;
          }
    
        });
    
   }

   enviarRecupPassword(){
    
     let correorec = { correoac:this.correoac};
  
      this.loginservice.recupPass(correorec).subscribe(response => {
          var data = JSON.stringify(response);

          console.log(data);
    
      });
    
      swal(
        'EnHoraBuena!',
        'Se envio un codigo de recuperación a tu bandeja de correo',
        'success'
      ).then(()=> {
        window.location.reload();

      })
    
     }
 


}
