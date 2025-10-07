import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NewComponent } from "./clase-directivas/new-component/new-component";
import { Padre } from "./clase-directivas/padre/padre";
import { ComponenteDirectivas } from "./clase-directivas/componente-directivas/componente-directivas";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent, Padre, ComponenteDirectivas, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
