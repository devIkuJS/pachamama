import { Component } from '@angular/core';
import {LoginService} from '../app/services/login.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { Globals } from './global'
import { NavigationCancel, Event,NavigationEnd,NavigationError,NavigationStart,Router } from '@angular/router'; 
import {ProductoService} from '../app/services/producto.service';
import {CarritoService} from '../app/services/carrito.service';
import {Observable} from 'rxjs';
import {Producto} from './models/producto';
import {of} from 'rxjs/observable/of';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';

  public titulostore:String;
  public listacambio;
  public shoppingCartItems$: Observable<Producto[]> = of([]);
  public shoppingCartItems;
  public changeMoneda:String;
  public items: Array<any>;


  constructor(public loginservice: LoginService , public router: Router ,
     public _loadingBar: SlimLoadingBarService , public cambioprecio: ProductoService 
     , public cartService: CarritoService , public producto:ProductoService, public globals: Globals) {

      this.items = [];

      this.changeMoneda = "USD"

     
    this.titulostore = "Pachamama store";

    this.shoppingCartItems$ = this.cartService.getItems();
    
       this.shoppingCartItems$.subscribe(response => {
          this.shoppingCartItems = response
          }); 

          


    

  }

  onChangeMonedaHeader(event) {      
    let value = event.target.value;
    this.globals.moneda = value;
    var urlData:string = String(window.location.pathname);
    this.router.navigate([urlData]);
  }

  goLogout(){
    this.loginservice.logout();
   // this.nav.setRoot(LoginPage);
   this.router.navigate(['/iniciar-sesion']);
  }

  convertirSoles(){
    this.cambioprecio.listarProductoConversionaSoles().subscribe(response => {

      console.log("----------");
      console.log(response);
      this.listacambio= response;
        });
  }

 
}
