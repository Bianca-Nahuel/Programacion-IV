import { Routes } from '@angular/router';
import { Home } from './clase-ruta/home/home';
import { ProdutoCard } from './clase-ruta/produto-card/produto-card';
import { noPathGuardGuard } from './clase-servicio/no-path-guard-guard';


export const routes: Routes = [
    {path:"home", component:Home},
    {path:"producto",
    loadComponent:() => import('./clase-ruta/productos/productos').then((m)=> m.Productos ) },
    {path:"producto/:id", component:ProdutoCard},
    {path:"", redirectTo:"home", pathMatch:'full'},
    {path:"**",redirectTo:"home"}
   
];
