import { Component, inject, input, OnInit } from '@angular/core';
import { MiServicio } from '../../clase-servicios/mi-servicio';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-produto-card',
  imports: [],
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.css'
})
export class ProdutoCard implements OnInit{
  
  miServicio = inject(MiServicio)
  id = input<string>()
  producto?:Producto  


  ngOnInit(): void {
    this.producto = this.miServicio.getProdductsById(Number(this.id()))
  }

  
}
