import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2';

import {Departamento} from '../../models/departamento';
import {Provincia} from '../../models/provincia';
import {Distrito} from '../../models/distrito';
//import {Persona} from '../../models/persona';


import {PlacesService} from '../../services/places.service';
import {UsuarioService} from '../../services/usuario.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from '../perfil/must-match.validator';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  ////PROD///
  public departamento:any;
  public provincia:any;
  public Seleccione:any;
  public departamentos:Departamento[];
  public iddepartamento: String;
  public provincias = [];
  public idprovincia: String;
  public distritos= [];
  public nombres: String;
  public apellido_paterno: String;
  public apellido_materno: String;
  public dni: String;
  public correo: String;
  public clave: String;
  public celular: String;
  public direccion: String;
  public distrito: Number;
  registerForm: FormGroup;
  submitted = false;


  constructor(private places:PlacesService ,private usuario: UsuarioService , private formBuilder: FormBuilder , private router: Router) { 

    this.places.listarDepartamentos().subscribe( response => {
      this.departamentos = response;

    });


  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      nombresVal: ['', Validators.required],
      apellido_paternoVal: ['', Validators.required],
      apellido_maternoVal: ['', Validators.required],
      dniVal: ['', [Validators.required, Validators.minLength(8)]],
      celularVal: ['', [Validators.required, Validators.minLength(9)]],
      departamentoVal: ['', Validators.required],
      provinciaVal: ['', Validators.required],
      distritoVal: ['', Validators.required],
      direccionVal: ['', Validators.required],
      correoVal: ['', [Validators.required, Validators.email]],
      claveVal: ['', [Validators.required, Validators.minLength(6)]]
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

 registroUsuario(){

  this.submitted = true;

  if (this.registerForm.invalid) {
    return;
}


 let persona = {nombres: this.nombres, apellido_paterno: this.apellido_paterno, apellido_materno: this.apellido_materno , dni:this.dni , correo:this.correo, clave:this.clave, celular:this.celular, distrito:this.distrito, direccion:this.direccion};


  this.usuario.registrarPersona(persona).subscribe(response => {
      var data = JSON.stringify(response);

      console.log(data);

  });

  swal(
    'EnHoraBuena!',
    'Te haz registrado!',
    'success'
  ).then(()=> {
    this.router.navigate(['/iniciar-sesion']);
  })

 }


}
