import { Component } from '@angular/core';
import { Hijo } from "../hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {
  nombreHijo1 = "Hijo 1"

  alertHijo(hijo:string){
    alert(hijo)
  }

}
