import { Component, computed, inject, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { Router, RouterLink } from '@angular/router';
import {ProductoService } from '../../clase-servicios/mi-servicio';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.html',
  styleUrl: './productos.css',
  imports: [RouterLink],
})
export class Productos{
  
  router = inject(Router)
  productosService = inject(ProductoService)
  productos = toSignal(this.productosService.getProductos())

 navegar(id:Number){
    this.router.navigate(["/producto",id])
 }


 cargar(){
    this.productosService.postProduct({nombre:"producto-nuevo"}).subscribe(
      {next: () => 
        alert("producto Cargado")
      }
    )
 }

}
