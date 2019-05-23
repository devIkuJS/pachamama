import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes , Router , ActivatedRoute} from '@angular/router';
import {ProductoService} from '../../services/producto.service';
import {Producto} from '../../models/producto';
import {CarritoService} from '../../services/carrito.service';
import { Globals } from '../../global'
import {MonedaService} from '../../services/moneda.service';
import {LoginService} from '../../services/login.service';
import {Moneda} from '../../models/moneda';
import swal from 'sweetalert2';



@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  public detalleproducto;
  public listaMoneda: Moneda[];

  constructor( private route: ActivatedRoute , private producto: ProductoService , private cartService: CarritoService ,public globals: Globals , public moneda: MonedaService , public loginservice: LoginService) { 

  this.detalleproducto= [];


  this.moneda.listarMoneda().subscribe(response => {

    this.listaMoneda= response;

    this.route.params.subscribe(params =>{
      
          var parameter = {
            "idproducto": params['idproducto']
          };
      
          this.producto.detalleProducto(parameter).subscribe( response => {
      
      
            this.detalleproducto = JSON.parse(response);

            this.globals["cambioMoneda"]  = this.listaMoneda[0]["tipocambio"] ;
            var montoCambioWC = this.globals["cambioMoneda"];    
            var precioDolaresWC = this.detalleproducto["precio"];
      
            if(this.globals.moneda == "USD"){
              
              this.globals.moneda = this.listaMoneda[2].Simbolo;
      
              }
      
              if(this.globals.moneda == "PEN"){
                this.globals.cambioMoneda  = this.listaMoneda[1].tipocambio ;
                 var montoCambio = this.globals.cambioMoneda;
                 var precioDolares = this.detalleproducto.precio;
                 this.detalleproducto.precio = (parseFloat(""+montoCambio) * precioDolares).toFixed(2);
                 this.globals.moneda = this.listaMoneda[1].Simbolo;
                 this.detalleproducto.Simbolo = this.globals.moneda;
               }
      
               if(this.globals.moneda == "COP"){
                this.globals.cambioMoneda  = this.listaMoneda[3].tipocambio ;
                var montoCambio = this.globals.cambioMoneda;
                var precioDolares = this.detalleproducto.precio;
                this.detalleproducto.precio = (parseFloat(""+montoCambio) * precioDolares).toFixed(2);
                this.globals.moneda = this.listaMoneda[3].Simbolo;
                this.detalleproducto.Simbolo = this.globals.moneda;
               }
      
               if(this.globals.moneda == "WC"){
                this.globals.cambioMoneda  = this.listaMoneda[0].tipocambio ;
                var montoCambio = this.globals.cambioMoneda;
                var precioDolares = this.detalleproducto.precio;
                this.detalleproducto.precio = (parseFloat(""+montoCambio) * precioDolares).toFixed(2);
                this.globals.moneda = this.listaMoneda[0].Simbolo;
                this.detalleproducto.Simbolo = this.globals.moneda;
             
               }
            this.detalleproducto.cantidad=1;
         
          }); 
      
      
        });


       });
  


  

  }

  ngOnInit() {
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
