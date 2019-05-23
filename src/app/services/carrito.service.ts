import {Injectable } from '@angular/core';
import{Producto} from '../models/producto';

import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';

const STORAGE_KEY = 'productos_guardados';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

 public itemsInCartSubject = new BehaviorSubject<Producto[]>([]);
 
  public itemsInCart: Producto[] = [];




  constructor() {
     
    localStorage.getItem("lista");

    this.itemsInCartSubject.subscribe(response => {
      this.itemsInCart = response
      localStorage.setItem("lista",JSON.stringify(this.itemsInCart));
      });
      

      
  }

  
  
public addToCart(item: Producto) {

    this.itemsInCartSubject.next([...this.itemsInCart, item]);

  } 



  public removeFromCart(item: Producto) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(response => 
      response.idproducto !== item.idproducto
    );
    this.itemsInCartSubject.next(itemsWithoutRemoved);
    localStorage.setItem("lista",JSON.stringify(this.itemsInCart));
  }


  public getItems(): Observable<Producto[]> {
     
    localStorage.getItem("lista")
     
    
    return this.itemsInCartSubject;
  }

  
  

  

 


}
