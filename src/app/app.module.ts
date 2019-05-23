import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Plugins*/
import {Routes , RouterModule , CanActivate} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient , HttpClientModule , HttpHeaders} from '@angular/common/http';

/*librerias*/
import {NgxPaginationModule} from 'ngx-pagination';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
//import { CookieService } from 'angular2-cookie/services/cookies.service';
//import { CookieService, CookieOptions } from 'angular2-cookie/core';
//import { StorageServiceModule } from 'angular-webstorage-service';
import { ContenteditableModule } from 'ng-contenteditable';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';



/*Clases*/

import { FilterByMarcaPipe } from "./pipes/filterMarca.pipe";
import { ArraySortPipe } from "./pipes/orderbyNombre.pipe";
import { ShowCantidadPipe } from "./pipes/showbyCantidad.pipe";
import { FilterByPrecioPipe } from "./pipes/filterPrecio.pipe";

/*Componentes*/

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { CarritoDeComprasComponent } from './components/carrito-de-compras/carrito-de-compras.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ListaProductosGeneralComponent } from './components/lista-productos-general/lista-productos-general.component';
import { MedicinaNaturalComponent } from './components/medicina-natural/medicina-natural.component';
import { ListaProductosCategoriaComponent } from './components/lista-productos-categoria/lista-productos-categoria.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
/*servicios*/
//import { AuthService as AuthGuard} from './services/auth.service';
import { AuthService} from './services/auth.service';
import { Globals } from './global';
import { TrabajaConNosotrosComponent } from './components/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { FranquiciaComponent } from './components/franquicia/franquicia.component';
import { ClubPachamamaComponent } from './components/club-pachamama/club-pachamama.component';
import { NoAutenticadoComponent } from './components/no-autenticado/no-autenticado.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';



const routes: Routes = [
  {path: '' , component: IndexComponent},
  {path: 'inicio' , component: IndexComponent},
  {path: 'nosotros' , component: NosotrosComponent},
  {path: 'servicios' , component: ServiciosComponent},
  {path: 'contacto' , component: ContactoComponent},
  {path: 'trabaja-con-nosotros' , component: TrabajaConNosotrosComponent },
  {path: 'franquicia' , component: FranquiciaComponent},
  {path: 'club-pachamama' , component: ClubPachamamaComponent},
  {path: 'medicina-natural' , component: MedicinaNaturalComponent},
  {path: 'iniciar-sesion' , component: IniciarSesionComponent},
  {path: 'registrar-usuario' , component: RegistrarUsuarioComponent},
  {path: 'buscar/:nombre' , component: ListaProductosComponent},
  {path: 'lista-de-productos' , component: ListaProductosGeneralComponent},
  {path: 'detalle/:idproducto' , component: DetalleProductoComponent},
  {path: 'carrito-de-compras' , component: CarritoDeComprasComponent},
  {path: 'checkout' , component: CheckoutComponent, canActivate:[AuthService]},
  {path: 'categoria/:idcategoria' , component:ListaProductosCategoriaComponent},
  {path: 'perfil' , component: PerfilComponent , canActivate:[AuthService]}, 
  {path: 'no-autenticado', component: NoAutenticadoComponent},
  {path: '**' , component: NoEncontradoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    IniciarSesionComponent,
    ListaProductosComponent,
    DetalleProductoComponent,
    RegistrarUsuarioComponent,
    PerfilComponent,
    CarritoDeComprasComponent,
    NosotrosComponent,
    ContactoComponent,
    ListaProductosGeneralComponent,
    MedicinaNaturalComponent,
    ListaProductosCategoriaComponent,
    CheckoutComponent,
    ServiciosComponent,
    FilterByMarcaPipe,
    ArraySortPipe,
    ShowCantidadPipe,
    FilterByPrecioPipe,
    TrabajaConNosotrosComponent,
    FranquiciaComponent,
    ClubPachamamaComponent,
    NoAutenticadoComponent,
    NoEncontradoComponent

  ],
  imports: [
    BrowserModule,
   NgxPaginationModule,
   RouterModule.forRoot(routes),
   FormsModule,
   ReactiveFormsModule,
    HttpClientModule,
    SlimLoadingBarModule,
    ContenteditableModule,
    LoadingBarHttpClientModule
  ],
  exports: [RouterModule , FilterByMarcaPipe],
 providers: [ AuthService , Globals ],

  bootstrap: [AppComponent]
})
export class AppModule { }
