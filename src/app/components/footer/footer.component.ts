import { Component, OnInit } from '@angular/core';

import {ContactoService} from '../../services/contacto.service';

import swal from 'sweetalert2';

import { Router } from '@angular/router';


declare var jQuery: any;
declare var $:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  correo: String;

  respuesta: String;

  constructor(public contactoservice: ContactoService , private router: Router) { }

  ngOnInit() {
    var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    jQueryback_to_top = jQuery('.totop');
  
  //hide or show the "back to top" link
  jQuery(window).scroll(function() {
    (jQuery(this).scrollTop() > offset) ? jQueryback_to_top.addClass('totop-is-visible'): jQueryback_to_top.removeClass('totop-is-visible totop-fade-out');
    if (jQuery(this).scrollTop() > offset_opacity) {
      jQueryback_to_top.addClass('totop-fade-out');
    }
  });

  jQuery(".collapsed-block .expander").on("click", function(e) {
    var collapse_content_selector = jQuery(this).attr("href");
    var expander = jQuery(this);
    if (!jQuery(collapse_content_selector).hasClass("open")) expander.addClass("open").html("&minus;");
    else expander.removeClass("open").html("+");
    if (!jQuery(collapse_content_selector).hasClass("open")) jQuery(collapse_content_selector).addClass("open").slideDown("normal");
    else jQuery(collapse_content_selector).removeClass("open").slideUp("normal");
    e.preventDefault()
  });



  }


  enviarSuscripcion() {
    
          let correoSuscrip = { correo:this.correo} ;
    
             this.contactoservice.enviarSuscripcion(correoSuscrip).subscribe( response => {
  
               this.respuesta = response;
  
                  swal(
                    'Felicidades',
                    'Te haz suscrito a Pachamama Store , pronto tendremos mas novedades y promociones sobre ti',
                    'success'
                  ).then(()=> {
                    var urlData:string = String(window.location.pathname);
                    this.router.navigate([urlData]);
    
                  })
    
              }); 
          
          }



}
