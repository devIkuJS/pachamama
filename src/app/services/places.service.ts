import { Injectable } from '@angular/core';
import { Pais } from '../models/pais';
import { Departamento } from '../models/departamento';
import { Distrito } from '../models/distrito';
//import { Provincia} from '../models/provincia';
import "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

 //  public domain: String = "http://lapachamamasac.com/pachamama/";

 public domain: String = "http://pachamama.ourlimm.com/webservices/";
  
    constructor(private http: HttpClient) { }

    listarPaises(){
      return this.http.get<Pais[]>(`${this.domain}paises/listar`).map(res => res);
    }
  
    listarDepartamentos(){
      return this.http.get<Departamento[]>(`${this.domain}departamentos/listar`).map(res => res);
    }

    listarProvincias(idepartamento){
      
      //return this.http.post(`${this.domain}registro/persona`,persona,{headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})}).map(res => res);
      return this.http.post(`${this.domain}provincias/listar`,idepartamento,
      {headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'}).map(res => res); 
      
      }

      listarDistritos(idprovincia){
        
        //return this.http.post(`${this.domain}registro/persona`,persona,{headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})}).map(res => res);
        return this.http.post(`${this.domain}distritos/listar`,idprovincia,
        {headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'}).map(res => res); 
        
        }
    
}
