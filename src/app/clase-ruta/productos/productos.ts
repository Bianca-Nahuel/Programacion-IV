import { Component, inject } from '@angular/core';
import { Producto } from '../models/producto';
import { Router, RouterLink } from '@angular/router';
import { MiServicio } from '../../clase-servicios/mi-servicio';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  router = inject(Router)
  miServicio = inject(MiServicio)
  productos:Producto[] = this.miServicio.productos 

 navegar(id:Number){
    this.router.navigate(["/producto",id])
 }
}
