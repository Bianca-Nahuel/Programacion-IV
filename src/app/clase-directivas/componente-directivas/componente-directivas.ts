import { Component, computed, signal } from '@angular/core';
import { Hijo } from '../hijo/hijo';
import { DirectivaPerso } from "../directivas/directiva-perso";
import { DirectivaEstructura } from '../directivas/directiva-estructura';


@Component({
  selector: 'app-componente-directivas',
  imports: [Hijo, DirectivaPerso, DirectivaEstructura],
  templateUrl: './componente-directivas.html',
  styleUrl: './componente-directivas.css'
})
export class ComponenteDirectivas {
  isVisible = signal(false)
  arrHijos = signal<string[]>(["Hijo 0", "Hijo 1", "Hijo 2", "Hijo 3"])
  cont = signal(0)
  isGrande = computed(()  => this.cont() >= 10)
  rojoOAzul = computed(()  => this.cont() >= 10? "rojo" : "azul" )
  

  change(){
    this.isVisible.update( v => !v )
  }

  add(){
    let index = this.arrHijos().length 
    this.arrHijos.update(arr => [...arr, "Hijo " + index])
  }

  reset(){
    this.cont.set(0)
  }

  count(){
    this.cont.update((c) => c + 1)
  }
}
