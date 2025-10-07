import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { MiServicio } from '../clase-servicios/mi-servicio';

export const noPathGuardGuard: CanActivateFn = (route, state) => {
  const servicio = inject(MiServicio)
  const router = inject(Router)
  const  id = Number(route.paramMap.get("id")) 
  const producto = servicio.getProdductsById(id)

  const path = router.parseUrl("/home")
  return producto ?  true : new RedirectCommand(path);
};
