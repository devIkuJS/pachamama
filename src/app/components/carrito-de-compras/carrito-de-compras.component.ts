import { Component, OnInit ,Input} from '@angular/core';
import {CarritoService} from '../../services/carrito.service';
import {LoginService} from '../../services/login.service';
import {Producto} from './../../models/producto';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import {Moneda} from '../../models/moneda';
import {MonedaService} from '../../services/moneda.service';
import { Router } from '@angular/router';
import { Globals } from '../../global'

import swal from 'sweetalert2';


@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {

 public shoppingCartItems$: Observable<Producto[]> = of([]);
 public shoppingCartItems: Producto[] = [];
 public Simbolo: String;
 total : any = '0';
 public listaMoneda: Moneda[];



  constructor(private cartService: CarritoService , private router: Router, private loginservice:LoginService , public globals: Globals , public moneda: MonedaService ) {
    this.moneda.listarMoneda().subscribe(response => {
      this.listaMoneda= response;
         });
    
    this.shoppingCartItems$ = this.cartService.getItems();

   

    this.shoppingCartItems$.subscribe(response => {
      this.shoppingCartItems = response

         


      });

      
  }

  ngOnInit() {
   
  }

 


  totalPrice(idproducto) {
    this.total = 0;
    for (let i = 0; i < this.shoppingCartItems.length; i++) {

        if (idproducto === null || this.shoppingCartItems[i].idproducto === idproducto) {
            if (this.shoppingCartItems[i].precio) {
                this.total += (this.shoppingCartItems[i].cantidad * this.shoppingCartItems[i].precio);
            } else {
                this.total += (this.shoppingCartItems[i].cantidad * this.shoppingCartItems[i].precio);
            }
        }
    }
    localStorage.setItem("total", String(this.total));
    return (this.total).toFixed(2);
}


  add(pid){
 
    for(var i=0;i<this.shoppingCartItems.length;i++){
      if(this.shoppingCartItems[i].idproducto === pid)
      {  
        this.shoppingCartItems[i].cantidad += 1;
      }           
    }
    localStorage.setItem("lista",JSON.stringify(this.shoppingCartItems));

  }

  del(pid){

    for(var i=0;i<this.shoppingCartItems.length;i++){
      if(this.shoppingCartItems[i].idproducto === pid)
      {  
        this.shoppingCartItems[i].cantidad -= 1;

      }    
      localStorage.setItem("lista",JSON.stringify(this.shoppingCartItems));       
    }

  }


  public removeItem(item: Producto) {
    this.cartService.removeFromCart(item)
    
  } 

  procesarcheckout(){
    if(this.loginservice.isLoggedin == true){

      this.router.navigate(['/checkout']);
      
    }else{

      swal({
        type: 'error',
        title: 'Alerta',
        text: 'Para procesar el checkout Ud. primero debe iniciar sesión'
      }).then(()=>{
        this.router.navigate(['/iniciar-sesion']);
       }); 

    }
  }
  

}
