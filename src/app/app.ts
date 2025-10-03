import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from "./new-component/new-component";
import { Padre } from "./padre/padre";
import { ComponenteDirectivas } from "./componente-directivas/componente-directivas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent, Padre, ComponenteDirectivas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
