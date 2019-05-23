import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Marca } from '../models/marca';
import { Cart } from '../models/cart';

import "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
// public domain: String = "http://lapachamamasac.com/pachamama/";

 public domain: String = "http://pachamama.ourlimm.com/webservices/";

//public domain: String = "http://localhost/store/";

  
    constructor(private http: HttpClient) { 


    }

    
  
    buscarProducto(producto){
      return this.http.post(`${this.domain}producto/buscar`,producto,
      {headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'}).map(res => res); 
      
      }

     listarProducto(){
        return this.http.get<Producto[]>(`${this.domain}producto/lista`).map(res => res);
        
        }

     

      detalleProducto(idproducto){
        return this.http.post(`${this.domain}producto/detalle`,idproducto,
        {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'}).map(res => res);  
        
        }

 
          listarMarca(){
            return this.http.get<Marca[]>(`${this.domain}producto/listaMarca`).map(res => res);
            
            } 

          mostrarProductoxMarca(idmarca){
            return this.http.post(`${this.domain}producto/obtenerProductoxMarca`,idmarca,
            {headers: new HttpHeaders().set('Content-Type', 'application/json'),
            responseType: 'text'}).map(res => res);  
            
            }

    

              mostrarProductoxCategoria(idcategoria){
                return this.http.post(`${this.domain}producto/obtenerProductoxCategoria`,idcategoria,
                {headers: new HttpHeaders().set('Content-Type', 'application/json'),
                responseType: 'text'}).map(res => res);  
                
                }

            listarProductoNatural(){
              return this.http.get<Producto[]>(`${this.domain}producto/listaProductoNatural`).map(res => res);
              
              }

              

              listarProductoInicio(){
                return this.http.get<Producto[]>(`${this.domain}producto/listaProductoInicio`).map(res => res);
                
                }

                listarProductoInicioNatural(){
                  return this.http.get<Producto[]>(`${this.domain}producto/listaProductoInicioNatural`).map(res => res);
                  
                  }


                listarProductoConversionaSoles(){
                  return this.http.get<Producto[]>(`${this.domain}producto/convertirPrecioaSoles`).map(res => res);
                  
                  }

             

      
}
