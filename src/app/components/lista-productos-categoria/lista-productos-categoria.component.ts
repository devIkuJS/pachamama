import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes , Router , ActivatedRoute} from '@angular/router';
import {ProductoService} from '../../services/producto.service';
import {Producto} from '../../models/producto';
import {Moneda} from '../../models/moneda';
import {CarritoService} from '../../services/carrito.service';
import {MonedaService} from '../../services/moneda.service';
import {LoginService} from '../../services/login.service';
import swal from 'sweetalert2';
import { Globals } from '../../global'


declare var jQuery: any;
declare var $:any; 

@Component({
  selector: 'app-lista-productos-categoria',
  templateUrl: './lista-productos-categoria.component.html',
  styleUrls: ['./lista-productos-categoria.component.css']
})
export class ListaProductosCategoriaComponent implements OnInit {

  //PROD//
  public orden: any;
  public Seleccione: any;
  public mostrar: any;
  public priceMinFilter:any;
  public priceMaxFilter:any;
  public p:any;

  //

  listaproductos;

  public listaMoneda: Moneda[];

  constructor( private route: ActivatedRoute , private producto: ProductoService , private cartService: CarritoService , private globals: Globals , public moneda: MonedaService , public loginservice: LoginService) { 

    this.listaproductos = [];
    //this.moneda.listarMoneda().subscribe(response => {


    //  this.listaMoneda= response;

      this.route.params.subscribe(params =>{
        
            var parameter = {
              "idcategoria": params['idcategoria']
            }; 
    
         //   var parameter = 2;
    
            this.producto.mostrarProductoxCategoria(parameter).subscribe( response => {

              this.moneda.listarMoneda().subscribe(response1 => {

                this.listaMoneda= response1;

            //  console.log(response);
              this.listaproductos = JSON.parse(response);
    
              console.log(this.listaproductos);
    
              for(var i = 0; i < response.length; i++){
    
                this.globals.cambioMoneda  = this.listaMoneda[0].tipocambio ;
                var montoCambioWC = this.globals.cambioMoneda;    
                var precioDolaresWC = this.listaproductos[i].precio;
    
                if(this.globals.moneda == "USD"){
                  
                   this.globals.moneda = this.listaMoneda[2].Simbolo;
                    
               }
                if(this.globals.moneda == "PEN"){
                
                  this.globals.cambioMoneda  = this.listaMoneda[1].tipocambio ;
                  var montoCambio = this.globals.cambioMoneda;
                  var precioDolares = this.listaproductos[i].precio;
                  this.listaproductos[i].precio = (parseFloat(""+montoCambio) * precioDolares).toFixed(2);
                  // this.items[i].Simbolo = "S/ ";
                  this.globals.moneda = this.listaMoneda[1].Simbolo;
          
                  this.listaproductos[i].Simbolo = this.globals.moneda;
    
                  console.log(this.globals.moneda);
    
                }
    
                if(this.globals.moneda == "COP"){
                  this.globals.cambioMoneda  = this.listaMoneda[3].tipocambio ;
                   var montoCambio = this.globals.cambioMoneda;
                   var precioDolares = this.listaproductos[i].precio;
                   this.listaproductos[i].precio = (parseFloat(""+montoCambio) * precioDolares).toFixed(2);
                   // this.items[i].Simbolo = "S/ ";
                   this.globals.moneda = this.listaMoneda[3].Simbolo;
           
                   this.listaproductos[i].Simbolo = this.globals.moneda;
    
                   console.log(this.globals.moneda);
               
                 }
          
                 if(this.globals.moneda == "WC"){
                  this.globals.cambioMoneda  = this.listaMoneda[0].tipocambio ;
                   var montoCambio = this.globals.cambioMoneda;
                   var precioDolares = this.listaproductos[i].precio;
                   this.listaproductos[i].precio = (parseFloat(""+montoCambio) * precioDolares).toFixed(2);
                   // this.items[i].Simbolo = "S/ ";
                   this.globals.moneda = this.listaMoneda[0].Simbolo;
           
                   this.listaproductos[i].Simbolo = this.globals.moneda;
    
                   console.log(this.globals.moneda);
               
                 }
    
                this.listaproductos[i].cantidad = 1;
              } 
    
            }); 
        
          });
          });


       //  });
    
      

  }

  ngOnInit() {

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

  public addToCart(product: Producto) {
    
      this.cartService.addToCart(product);

      console.log(product);  
    
     swal(
        'Producto agregado',
        '',
        'success'
      )
      
    }

}
