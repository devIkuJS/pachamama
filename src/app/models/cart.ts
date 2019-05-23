import { Producto} from './../models/producto';

export interface Cart {
 loaded: boolean;
 products : Producto[];

}