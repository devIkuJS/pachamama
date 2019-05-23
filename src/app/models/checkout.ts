import { Producto} from './../models/producto';

export interface Checkout {
products : Producto[];
 total: Number;
 

}