import { Component, EventEmitter, input, output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
  //input nos permite comunicarnos de un padre a un hijo - remplaza @Input() 
  nombre = input.required<string>()
  //output nos permite comunicarnos de un hijo a un padre - remplaza @Output()
  eventoHijo = output<string>()

  
  onClick(){
    //Lanzo una evento para notificar al padre
    this.eventoHijo.emit(this.nombre())
  }
}