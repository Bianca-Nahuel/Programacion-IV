import { inject, Injectable, Signal, signal } from '@angular/core';
import { Producto } from '../clase-ruta/models/producto';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  htpp = inject(HttpClient) 
  baseURL = "http://localhost:3000/Productos"
 
  getProductos(){
    return this.htpp.get<Producto[]>(this.baseURL)
  }

  getProductoById(id:string){
    return this.htpp.get<Producto>(this.baseURL+`/${id}`)
  }

  postProduct(obj:Partial<Producto>){
    return this.htpp.post<Producto>(this.baseURL,obj)
  }

}
