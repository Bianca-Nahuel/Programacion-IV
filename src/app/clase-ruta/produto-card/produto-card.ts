import { Component, inject, input, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../../clase-servicios/mi-servicio';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-produto-card',
  imports: [],
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.css'
})
export class ProdutoCard implements OnInit{
 
  
  id = input.required<string>()
  productoService = inject(ProductoService)
  producto?:Producto 

  ngOnInit(): void {
    this.productoService.getProductoById(this.id()).subscribe( (p) => this.producto = p) 
  }
  
}
