import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { ProductoService } from '../clase-servicios/mi-servicio';


export const noPathGuardGuard: CanActivateFn = (route, state) => {
  const servicio = inject(ProductoService)
  const router = inject(Router)
  const  id = Number(route.paramMap.get("id")) 
  const producto = undefined

  const path = router.parseUrl("/home")
  return producto ?  true : new RedirectCommand(path);
};
