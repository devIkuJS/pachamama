import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import "rxjs/Rx";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

 // public domain: String = "http://lapachamamasac.com/pachamama/";

 public domain: String = "http://pachamama.ourlimm.com/webservices/";

  constructor(private http: HttpClient) { }

  listarCategorias(){
    return this.http.get<Categoria[]>(`${this.domain}categoria/listar`).map(res => res);
  }
}
