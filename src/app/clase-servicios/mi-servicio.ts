import { Injectable } from '@angular/core';
import { Producto } from '../clase-ruta/models/producto';

@Injectable({
  providedIn: 'root'
})
export class MiServicio {
  productos:Producto[] = [{id:1,nombre: "producto-1"},{id:2 ,nombre: "producto-2"} ]

  getProdductsById(id:number): Producto | undefined{
    return this.productos.find((p)=> p.id === id)
  }
}
