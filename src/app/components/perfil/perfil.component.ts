import { Component, OnInit } from '@angular/core';

import {Departamento} from '../../models/departamento';
import {Persona} from '../../models/persona';

import {PlacesService} from '../../services/places.service';

import {LoginService} from '../../services/login.service';

import {CompraService} from '../../services/compra.service';

import { Router, ActivatedRoute } from '@angular/router';

import swal from 'sweetalert2';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  //PROD//
  public Seleccione:any;


  //

  public departamentos:Departamento[];
  public iddepartamento: String;
  public provincias = [];
  public idprovincia: String;
  public distritos= [];

  public datospersona: any  = Persona;

  public listacompra;

  public detallecompra = [];

  public idpersona;

  total:number = 0;

  public actualpass: String;

  public newpass: String;

  public confirmpass:String;

  registerForm: FormGroup;

  submitted = false;


  public nombres: String;
  public apellido_paterno: String ;
  public apellido_materno: String ;
  public correo: String ;
  public celular: String;
  public direccion: String;
  public iddistrito: Number;
  public listaCheckout: any;


  public listaAc;


  constructor(private places:PlacesService , private perfilservice: LoginService , private router: Router , private compraservice: CompraService , private formBuilder: FormBuilder  ) { 
  
    let datosPersona = JSON.parse(localStorage.getItem("datosperfil"));

    this.listaCheckout = JSON.parse(localStorage.getItem("lista"));

    let idpersona = {idpersona : datosPersona["idpersona"]}

    this.places.listarDepartamentos().subscribe( response => {
      this.departamentos = response;

    });

  
    this.perfilservice.getProfile(idpersona).subscribe(response => {

    this.datospersona = JSON.parse(response);

    this.idpersona= this.datospersona.idpersona;
    this.nombres= this.datospersona.nombres;
    this.apellido_paterno= this.datospersona.apellido_paterno;
    this.apellido_materno= this.datospersona.apellido_materno;
    this.correo= this.datospersona.correo;
    this.celular= this.datospersona.celular;
    this.direccion= this.datospersona.direccion;
    this.iddistrito= this.datospersona.iddistrito;


    
    this.compraservice.listarCompra(idpersona).subscribe(response1 => {
          this.listacompra = JSON.parse(response1);
  

         });

   
    });

    

   
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      actualpassword: ['', Validators.required],
      nuevapassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('nuevapassword', 'confirmPassword')
  });
   
  }

  get f() { return this.registerForm.controls; }

  

  selectProvincia(event: any) {
    
       this.iddepartamento = event.target.value;
    
       
        
       let departamento = { iddepartamento: this.iddepartamento}
    
       this.places.listarProvincias(departamento).subscribe( response => {
          this.provincias = JSON.parse(response);
    
        }); 
    
    }
    
    selectDistrito(event: any) {
      
         this.idprovincia = event.target.value;
          
         let provincia = { idprovincia: this.idprovincia}
      
         this.places.listarDistritos(provincia).subscribe( response => {
            this.distritos = JSON.parse(response);
          }); 
      
      }

      verDetalleCompra(idcompra: any){

        let variable = {idcompra : idcompra};
         var total= 0;
        this.compraservice.listarDetalleCompra(variable).subscribe(response2 => {
          this.detallecompra = JSON.parse(response2);

         });
    
      }

      totalDetalle(idproducto) {
        
        this.total = 0;
        for (let i = 0; i < this.detallecompra.length; i++) {
    
            if (idproducto === null || this.detallecompra[i].idproducto === idproducto) {
                if (this.detallecompra[i].precio) {
                    this.total += (this.detallecompra[i].cantidad * this.detallecompra[i].precio);
                } else {
                    this.total += (this.detallecompra[i].cantidad * this.detallecompra[i].precio);
                }
            }
        }
     //   localStorage.setItem("total", String(this.total));
        return (this.total).toFixed(2);
    }

      goCheck(){
        if(this.listaCheckout.length > 0){
        //  this.router.navigateByUrl('/checkout');
        this.router.navigate(['/checkout']);

        }else{

          swal({
            type: 'error',
            title: 'Alerta',
            text: 'Debe tener al menos un producto para continuar con el checkout'
          }).then(()=>{
          //   window.location.reload();
          this.router.navigate(['/lista-de-productos']);
           }); 

        }
        
    
      }

      cambiarPassword(){

        
        this.submitted = true;
    
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
    

       let changepass = { actualpass:this.actualpass , newpass:this.newpass , idpersona: this.idpersona , confirmpass: this.confirmpass} ;

       console.log(changepass);
       
            
              this.perfilservice.cambiarPass(changepass).subscribe(response => {
                 var data = JSON.parse(response);

                 console.log(data);

                 swal(
                  'EnHoraBuena!',
                  'Se actualizo su contraseña',
                  'success'
                ).then(()=> {
                  var urlData:string = String(window.location.pathname);
                  this.router.navigate([urlData]);

                })
                
              
              }); 
    }


    actualizarPerfil() {

      let datosAc = { nombres:this.nombres , apellido_paterno:this.apellido_paterno ,
         apellido_materno: this.apellido_materno , celular: this.celular , iddistrito: this.iddistrito,direccion:this.direccion , 
         idpersona:this.idpersona} ;


  
         this.perfilservice.actualizarPerfil(datosAc).subscribe( response => {


         this.listaAc = response;



              swal(
                'EnHoraBuena!',
                'Se actualizo tus datos',
                'success'
              ).then(()=> {
                var urlData:string = String(window.location.pathname);
                this.router.navigate([urlData]);

              })

        
      
          }); 
      
      }

      
}
