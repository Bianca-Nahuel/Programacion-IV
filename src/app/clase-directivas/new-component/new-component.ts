import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-component',
  imports: [],
  templateUrl: './new-component.html',
  styleUrl: './new-component.css'
})
export class NewComponent {
  dato = signal(0)
  //signal que depende de otra signal (no puede ser modificada)
  datoPorDos = computed( () => this.dato() * 2 )

  

  constructor(){
    //evento disparado cuando alguna signal dentro de el cambie
    effect(  () => console.log(this.dato()) )
  }
  

  //para sobrescribir una signal se usa SET
  reset(){
    this.dato.set(0)
  }

  //para modificar una signal se usa update (arro function con la logica)
  count(){
    this.dato.update(v => ++v)
  }
}
