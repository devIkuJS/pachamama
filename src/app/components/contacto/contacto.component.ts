import { Component, OnInit } from '@angular/core';

import {ContactoService} from '../../services/contacto.service';

import swal from 'sweetalert2';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from '../perfil/must-match.validator';

import { Router } from '@angular/router';

declare var jQuery: any;
declare var $:any; 

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  nombres:String;
  correo: String;
  celular: String;
   mensaje: String;

   respuesta:any;

   contactoForm: FormGroup;
   
   
     submitted = false;

  constructor(public contactoservice: ContactoService , private router: Router , private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.contactoForm = this.formBuilder.group({
      nombresVal: ['', Validators.required],
      correoVal: ['', [Validators.required, Validators.email]],
      celularVal: ['', [Validators.required, Validators.minLength(9)]],
      mensajeVal: ['', Validators.required]
  });
    
        var setREVStartSize=function(){};
        
    
    setREVStartSize();
    function revslider_showDoubleJqueryError(sliderID) {}
    var tpj=jQuery;
    tpj.noConflict();
    var revapi6;
    tpj(document).ready(function() {
    if(tpj("#rev_slider_6_1").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_6_1");
    }else{
      revapi6 = tpj("#rev_slider_6_1").show().revolution({
        sliderType:"standard",
        sliderLayout:"auto",
        dottedOverlay:"none",
        delay:6000,
        navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation:"off",
          onHoverStop:"off",
          touch:{
            touchenabled:"on",
            swipe_threshold: 0.7,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          }
          ,
          arrows: {
            style:"hades",
            enable:true,
            hide_onmobile:false,
            hide_onleave:true,
            hide_delay:200,
            hide_delay_mobile:1200,
            tmp:'<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div></div>',
            left: {
              h_align:"left",
              v_align:"center",
              h_offset:20,
              v_offset:0
            },
            right: {
              h_align:"right",
              v_align:"center",
              h_offset:20,
              v_offset:0
            }
          }
          ,
          bullets: {
            enable:true,
            hide_onmobile:false,
            style:"hades",
            hide_onleave:true,
            hide_delay:200,
            hide_delay_mobile:1200,
            direction:"horizontal",
            h_align:"center",
            v_align:"bottom",
            h_offset:0,
            v_offset:20,
            space:5,
            tmp:'<span class="tp-bullet-image"></span>'
          }
        },
        gridwidth:1920,
        gridheight:650,
        lazyType:"none",
        shadow:0,
        spinner:"spinner0",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"on",
        disableProgressBar:"on",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        startWithSlide:0,
        debugMode:false,
        fallbacks: {
          simplifyAll:"off",
          nextSlideOnWindowFocus:"off",
          disableFocusListener:false,
        }
      });
    }
    })
    
    
      }

      get f() { return this.contactoForm.controls; }


      formContacto() {

        this.submitted = true;
        
          if (this.contactoForm.invalid) {
            return;
        }
        
              let contacto = { nombres:this.nombres , correo: this.correo , celular: this.celular , mensaje: this.mensaje} ;
        
                 this.contactoservice.enviarContacto(contacto).subscribe( response => {
        
                 this.respuesta = response;

                      swal(
                        'Bien!',
                        'Tu mensaje se ha enviado!',
                        'success'
                      ).then(()=> {
                        var urlData:string = String(window.location.pathname);
                        this.router.navigate([urlData]);
        
                      })
        
                
              
                  }); 
              
              }


              keyPress(event: any) {
                const pattern = /[0-9\+\-\ ]/;
            
                let inputChar = String.fromCharCode(event.charCode);
                if (event.keyCode != 8 && !pattern.test(inputChar)) {
                  event.preventDefault();
                }
              }
    

}
