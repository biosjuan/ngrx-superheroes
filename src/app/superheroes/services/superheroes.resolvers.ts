import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, first, filter } from 'rxjs/operators';
import { SuperheroesEntityService } from './superheroes-entity.service';

export const superherosResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const superheroesEntityService = inject(SuperheroesEntityService);

  return superheroesEntityService.loaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        superheroesEntityService.getAll();
      }
    }),
    filter((loaded) => !!loaded),
    first()
  );
};
