import { Component, OnInit } from '@angular/core';

import {LoginService} from '../../services/login.service';
import {CarritoService} from '../../services/carrito.service';
import { CheckoutService} from '../../services/checkout.service';

import {Producto} from './../../models/producto';
import {Persona} from '../../models/persona';

import {Router} from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public listaCheckout;

  public total;

  public datospersona: any  = Persona;
  public nombres : string;
  public apellido_paterno : string;
  public apellido_materno : string;
  public dni: any;
  public celular: any;
  public correo: string;
  public direccion: string;
  public departamento: string;
  public provincia: string;
  public distrito: string;

  constructor(private perfilservice: LoginService , private cartService: CarritoService , public checkoutservice: CheckoutService , public router: Router  ) {

    this.listaCheckout = JSON.parse(localStorage.getItem("lista"));

    this.total = Number(localStorage.getItem("total"));

    let datosPersona = JSON.parse(localStorage.getItem("datosperfil"));
    
    let idpersona = {idpersona : datosPersona["idpersona"]}

   this.perfilservice.getProfile(idpersona).subscribe(response => {

     this.datospersona = JSON.parse(response);
     this.nombres = this.datospersona["nombres"];
     this.apellido_paterno = this.datospersona["apellido_paterno"];
     this.apellido_materno = this.datospersona["apellido_materno"];
     this.dni = this.datospersona["dni"];
     this.celular = this.datospersona["celular"];
     this.correo = this.datospersona["correo"];
     this.direccion = this.datospersona["direccion"];
     this.departamento = this.datospersona["departamento"];
     this.provincia = this.datospersona["provincia"];
     this.distrito = this.datospersona["distrito"];

     });

   }

  ngOnInit() {}


  registrarCompra(){

    let idpersona =  Number(this.datospersona["idpersona"]);

    swal.queue([{
      title: 'Desea realizar la compra?',
      type: 'info',
       confirmButtonText: 'Si ,confirmar',
       text: ' ',
       cancelButtonColor: '#d33',
       showCancelButton: true,
       showLoaderOnConfirm: true, 
       preConfirm: () => {
 
         this.checkoutservice.enviarCorreoCompras(this.listaCheckout,this.total , idpersona , this.correo).subscribe(response => {
 
          swal(
             'Compra realizada',
             'Su compra fue realizada puede ver los detalles de su compra en su bandeja de correo electrónico o en Perfil->Historial de compras<br><strong>El total de la compra esta tasado en USD.</strong>',
             'success'
           ).then(()=>{
            localStorage.removeItem("lista");
            this.router.navigate(['/perfil']);
           }); 
 
         });
 
 
           
       }
     }])


  }

}
