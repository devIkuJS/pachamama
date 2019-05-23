import { Component, OnInit } from '@angular/core';
import {Producto} from '../../models/producto';
import {Moneda} from '../../models/moneda';
import {ProductoService} from '../../services/producto.service';
import {CarritoService} from '../../services/carrito.service';
import {MonedaService} from '../../services/moneda.service';
import {LoginService} from '../../services/login.service';

declare var jQuery: any;
declare var $:any; 
 
//import * as myGlobals from '../../global';
import {Globals} from '../../global';

import swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit  {

  public listaproductos;

  public listaproductosnatural;

  public listaMoneda: Moneda[];

  constructor(private producto:ProductoService, private globals: Globals ,private cartService: CarritoService, public moneda: MonedaService , public loginservice: LoginService) {

    this.moneda.listarMoneda().subscribe(response => {
      this.listaMoneda= response;


      this.producto.listarProductoInicio().subscribe(response => {
        
              this.listaproductos= response;
        
              for(var i = 0; i < response["length"]; i++){

                this.globals["cambioMoneda"]  = this.listaMoneda[0]["tipocambio"] ;
                var montoCambioWC = this.globals["cambioMoneda"];    
                var precioDolaresWC = this.listaproductos[i]["precio"];
          
                 
                this.listaproductos[i]["precioWC"] = (precioDolaresWC/ parseFloat(""+ montoCambioWC)).toFixed(2);  
               
                this.globals["monedaWC"] = this.listaMoneda[0]["Simbolo"];
          
                this.listaproductos[i]["SimboloWC"] =  this.globals["monedaWC"];
                
                            if(this.globals["moneda"] == "USD"){
                              
                              this.globals["moneda"] = this.listaMoneda[2]["Simbolo"];
                                
                            }
                
                            if(this.globals["moneda"] == "PEN"){
                            
                              this.globals["cambioMoneda"]  = this.listaMoneda[1]["tipocambio"] ;
                              var montoCambio = this.globals["cambioMoneda"];
                              var precioDolares = this.listaproductos[i]["precio"];
                              this.listaproductos[i]["precio"] = (parseFloat(""+montoCambio) * precioDolares).toFixed(2);
                              this.globals["moneda"] = this.listaMoneda[1]["Simbolo"];
                              this.listaproductos[i]["Simbolo"] = this.globals["moneda"];
                
                            }
                
                            if(this.globals["moneda"] == "COP"){
                              this.globals["cambioMoneda"]  = this.listaMoneda[3]["tipocambio"] ;
                               var montoCambio = this.globals["cambioMoneda"];
                               var precioDolares = this.listaproductos[i]["precio"];
                               this.listaproductos[i]["precio"] = (parseFloat(""+montoCambio) * precioDolares).toFixed(2);
                               this.globals["moneda"] = this.listaMoneda[3]["Simbolo"];
                               this.listaproductos[i]["Simbolo"] = this.globals["moneda"];
                
                             }
                      
                             if(this.globals["moneda"] == "WC"){
                              this.globals["cambioMoneda"]  = this.listaMoneda[0]["tipocambio"] ;
                               var montoCambio = this.globals["cambioMoneda"];
                               var precioDolares = this.listaproductos[i]["precio"];
                               this.listaproductos[i]["precio"] = (parseFloat(""+montoCambio) * precioDolares).toFixed(2);
                               this.globals["moneda"] = this.listaMoneda[0]["Simbolo"];
                               this.listaproductos[i]["Simbolo"] = this.globals["moneda"];
                
                             }
                
                            this.listaproductos[i]["cantidad"] = 1;
                          } 
        
           
                 });
        
                 this.producto.listarProductoInicioNatural().subscribe(response => {
                  
                        this.listaproductosnatural= response;
                        console.log(this.listaproductosnatural);

                        for(var i = 0; i < response.length; i++){

                          this.globals["cambioMoneda"]  = this.listaMoneda[0]["tipocambio"] ;
                          var montoCambioWC = this.globals["cambioMoneda"];    
                          var precioDolaresWC = this.listaproductosnatural[i]["precio"];
                    
                           
                          this.listaproductosnatural[i]["precioWC"] = (precioDolaresWC/ parseFloat(""+ montoCambioWC)).toFixed(2);  
                         
                          this.globals["monedaWC"] = this.listaMoneda[0]["Simbolo"];
                    
                          this.listaproductosnatural[i]["SimboloWC"] =  this.globals["monedaWC"];
                          
                                      if(this.globals["moneda"] == "USD"){
                                        
                                        this.globals["moneda"] = this.listaMoneda[2]["Simbolo"];
                                          
                                      }
                          
                                      if(this.globals["moneda"] == "PEN"){
                                      
                                        this.globals["cambioMoneda"]  = this.listaMoneda[1]["tipocambio"] ;
                                        var montoCambio = this.globals["cambioMoneda"];
                                        var precioDolares = this.listaproductosnatural[i]["precio"];
                                        this.listaproductosnatural[i]["precio"] = (parseFloat(""+montoCambio) * precioDolares).toFixed(2);
                                        this.globals["moneda"] = this.listaMoneda[1]["Simbolo"];
                                        this.listaproductosnatural[i]["Simbolo"] = this.globals["moneda"];
                          
                          
                                      }
                          
                                      if(this.globals["moneda"] == "COP"){
                                        this.globals["cambioMoneda"]  = this.listaMoneda[3]["tipocambio"] ;
                                        var montoCambio = this.globals["cambioMoneda"];
                                        var precioDolares = this.listaproductos[i]["precio"];
                                        this.listaproductos[i]["precio"] = (parseFloat(""+montoCambio) * precioDolares).toFixed(2);
                                        this.globals["moneda"] = this.listaMoneda[3]["Simbolo"];
                                        this.listaproductos[i]["Simbolo"] = this.globals["moneda"];
                          
                                     
                                       }
                                
                                       if(this.globals.moneda == "WC"){
                                        this.globals["cambioMoneda"]  = this.listaMoneda[0]["tipocambio"] ;
                                        var montoCambio = this.globals["cambioMoneda"];
                                        var precioDolares = this.listaproductos[i]["precio"];
                                        this.listaproductos[i]["precio"] = (parseFloat(""+montoCambio) * precioDolares).toFixed(2);
                                        this.globals["moneda"] = this.listaMoneda[0]["Simbolo"];
                                        this.listaproductos[i]["Simbolo"] = this.globals["moneda"];
                                     
                                       }
                          
                                      this.listaproductosnatural[i]["cantidad"] = 1;
                                    } 
                  
                           });
    
    
         });


   

                   
  }

  public addToCart(product: Producto) {
    
      this.cartService.addToCart(product);
    
     
    
      swal(
        'Producto agregado',
        '',
        'success'
      )
    
    
      
    }

  ngOnInit() {

    

    this.libreria();

    jQuery("#slideshow > div:gt(0)").hide();
    
    setInterval(function() {
      jQuery('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 3000);


  }

  

  libreria(){
    jQuery(document).ready( function() {
      "use strict";
      
      
      /******************************************
         Newsletter popup
      ******************************************/
      
          jQuery('#myModal').appendTo("body");
                function show_modal(){
                  jQuery('#myModal').modal('show');
                }
      
                  jQuery('#myModal').modal({
                  keyboard: false,
                 backdrop:false
                }); 
      
      /******************************************
         Featured slider
      ******************************************/
      
      jQuery("#featured-slider .slider-items").owlCarousel({
          items: 3,
          itemsDesktop: [1024, 3],
          itemsDesktopSmall: [900, 2],
          itemsTablet: [640, 2],
          itemsMobile: [390, 1],
          navigation: !0,
          navigationText: [ '', '' ],
          slideSpeed: 500,
          pagination: !1,
          autoPlay: false
        }),
      
      
      /******************************************
        Top sellers slider
      ******************************************/
      
        jQuery("#top-sellers-slider .slider-items").owlCarousel({
          items: 3,
          itemsDesktop: [1024, 3],
          itemsDesktopSmall: [900, 2],
          itemsTablet: [640, 2],
          itemsMobile: [390, 1],
          navigation: !0,
          navigationText: [ '', '' ],
          slideSpeed: 500,
          pagination: !1,
          autoPlay: false
        }),
      
      /******************************************
        Special products slider
      ******************************************/
      
        jQuery("#special-products-slider .slider-items").owlCarousel({
          items: 4,
          itemsDesktop: [1024, 4],
          itemsDesktopSmall: [900, 3],
          itemsTablet: [640, 2],
          itemsMobile: [390, 1],
          navigation: !0,
          navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
          slideSpeed: 500,
          pagination: !1,
          autoPlay: false
        }),
      
      
      
      
      /******************************************
        Our clients slider
      ******************************************/
      
        jQuery("#our-clients-slider .slider-items").owlCarousel({
          items: 4,
          itemsDesktop: [1024, 4],
          itemsDesktopSmall: [900, 3],
          itemsTablet: [640, 3],
          itemsMobile: [480, 2],
          navigation: false,
          navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
          slideSpeed: 500,
          pagination: false,
          autoPlay: true
        }),
      
      /******************************************
        Latest news slider
      ******************************************/
      
        jQuery("#latest-news-slider .slider-items").owlCarousel({
          autoplay: !0,
          items: 3,
          itemsDesktop: [1024, 3],
          itemsDesktopSmall: [900, 2],
          itemsTablet: [640, 2],
          itemsMobile: [480, 1],
          navigation: !0,
          navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
          slideSpeed: 500,
          pagination: !1
        }),
      
      
      /******************************************
        Mobile menu
      ******************************************/
      
        jQuery("#mobile-menu").mobileMenu({
          MenuWidth: 250,
          SlideSpeed: 300,
          WindowsMaxWidth: 767,
          PagePush: !0,
          FromLeft: !0,
          Overlay: !0,
          CollapseMenu: !0,
          ClassName: "mobile-menu"
      
        }),
      
      /******************************************
        Mega Menu
      ******************************************/
      
        jQuery('.mega-menu-title').on('click', function() {
          if (jQuery('.mega-menu-category').is(':visible')) {
            jQuery('.mega-menu-category').slideUp();
          } else {
            jQuery('.mega-menu-category').slideDown();
          }
        });
      
      
      jQuery('.mega-menu-category .nav > li').hover(function() {
        jQuery(this).addClass("active");
        jQuery(this).find('.popup').stop(true, true).fadeIn('slow');
      }, function() {
        jQuery(this).removeClass("active");
        jQuery(this).find('.popup').stop(true, true).fadeOut('slow');
      });
      
      
      jQuery('.mega-menu-category .nav > li.view-more').on('click', function(e) {
        if (jQuery('.mega-menu-category .nav > li.more-menu').is(':visible')) {
          jQuery('.mega-menu-category .nav > li.more-menu').stop().slideUp();
          jQuery(this).find('a').text('More category');
        } else {
          jQuery('.mega-menu-category .nav > li.more-menu').stop().slideDown();
          jQuery(this).find('a').text('Close menu');
        }
        e.preventDefault();
      });
      
      /******************************************
         Category desc slider
      ******************************************/
      
      jQuery("#category-desc-slider .slider-items").owlCarousel({
        autoPlay: true,
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1024, 1], //5 items between 1024px and 901px
        itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0;
        itemsMobile: [320, 1],
        navigation: true,
        navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
        slideSpeed: 500,
        pagination: false
      });
      
      /******************************************
         Upsell product slider
      ******************************************/
      
      jQuery("#upsell-product-slider .slider-items").owlCarousel({
          items: 4,
          itemsDesktop: [1024, 4],
          itemsDesktopSmall: [900, 3],
          itemsTablet: [640, 2],
          itemsMobile: [390, 1],
          navigation: !0,
          navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
          slideSpeed: 500,
          pagination: !1,
          autoPlay: false
        }),
      
      /******************************************
        Related product slider
      ******************************************/
      
        jQuery("#related-product-slider .slider-items").owlCarousel({
          items: 4,
          itemsDesktop: [1024, 4],
          itemsDesktopSmall: [900, 3],
          itemsTablet: [640, 2],
          itemsMobile: [390, 1],
          navigation: !0,
          navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
          slideSpeed: 500,
          pagination: !1,
          autoPlay: true
        }),
      
      /******************************************
        Related posts
      ******************************************/
      
        jQuery("#related-posts .slider-items").owlCarousel({
          items: 3,
          itemsDesktop: [1024, 3],
          itemsDesktopSmall: [900, 3],
          itemsTablet: [640, 2],
          itemsMobile: [390, 1],
          navigation: !0,
          navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
          slideSpeed: 500,
          pagination: !1,
          autoPlay: true
        }),
      
      
      /******************************************
        testimonials slider
      ******************************************/
      
        jQuery("#testimonials-slider .slider-items").owlCarousel({
          items: 1,
          itemsDesktop: [1024, 1],
          itemsDesktopSmall: [900, 1],
          itemsTablet: [640, 1],
          itemsMobile: [390, 1],
          navigation: !0,
          navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
          slideSpeed: 500,
          pagination: false,
          autoPlay: true,
          singleItem: true,
              transitionStyle: "backSlide"
        }),
      
      /******************************************
        Home testimonials slider
      ******************************************/
      
        jQuery(".subDropdown")[0] && jQuery(".subDropdown").on("click", function() {
          jQuery(this).toggleClass("plus"), jQuery(this).toggleClass("minus"), jQuery(this).parent().find("ul").slideToggle()
        })
      if (jQuery('#home-testimonials-slider').length) {
        jQuery('#home-testimonials-slider').bxSlider({
          auto: true,
          infiniteLoop: true,
          hideControlOnEnd: true
        });
      }
      
      /******************************************
          PRICE FILTER
      ******************************************/
      
      jQuery('.slider-range-price').each(function() {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_reasult = jQuery(this).data('label-reasult');
        var t = jQuery(this);
        jQuery(this).slider({
          range: true,
          min: min,
          max: max,
          values: [value_min, value_max],
          slide: function(event, ui) {
            var result = label_reasult + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
            t.closest('.slider-range').find('.amount-range-price').html(result);
          }
        });
      })
      
      /******************************************
          Footer expander
      ******************************************/
      
      jQuery(".collapsed-block .expander").on("click", function(e) {
        var collapse_content_selector = jQuery(this).attr("href");
        var expander = jQuery(this);
        if (!jQuery(collapse_content_selector).hasClass("open")) expander.addClass("open").html("&minus;");
        else expander.removeClass("open").html("+");
        if (!jQuery(collapse_content_selector).hasClass("open")) jQuery(collapse_content_selector).addClass("open").slideDown("normal");
        else jQuery(collapse_content_selector).removeClass("open").slideUp("normal");
        e.preventDefault()
      });
      
      /******************************************
          Category sidebar
      ******************************************/
      
      jQuery(function() {
        jQuery(".category-sidebar ul > li.cat-item.cat-parent > ul").hide();
        jQuery(".category-sidebar ul > li.cat-item.cat-parent.current-cat-parent > ul").show();
        jQuery(".category-sidebar ul > li.cat-item.cat-parent.current-cat.cat-parent > ul").show();
        jQuery(".category-sidebar ul > li.cat-item.cat-parent").on('click', function() {
          if (jQuery(this).hasClass('current-cat-parent')) {
            var li = jQuery(this).closest('li');
            li.find(' > ul').slideToggle('fast');
            jQuery(this).toggleClass("close-cat");
          } else {
            var li = jQuery(this).closest('li');
            li.find(' > ul').slideToggle('fast');
            jQuery(this).toggleClass("cat-item.cat-parent open-cat");
          }
        });
        jQuery(".category-sidebar ul.children li.cat-item,ul.children li.cat-item > a").on("click", function(e) {
          e.stopPropagation();
        });
      });
      
      /******************************************
          colosebut
      ******************************************/
      
      jQuery("#colosebut1").on("click", function() {
        jQuery("#div1").fadeOut("slow");
      });
      jQuery("#colosebut2").on("click", function() {
        jQuery("#div2").fadeOut("slow");
      });
      jQuery("#colosebut3").on("click", function() {
        jQuery("#div3").fadeOut("slow");
      });
      jQuery("#colosebut4").on("click", function() {
        jQuery("#div4").fadeOut("slow");
      });
      
    
      
      })

      /******************************************
          totop
      ******************************************/
      // browser window scroll (in pixels) after which the "back to top" link is shown
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
 
  
}
