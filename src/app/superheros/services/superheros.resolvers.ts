import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, first, filter } from 'rxjs/operators';
import { SuperherosEntityService } from './superheros-entity.service';

export const superherosResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const superherosEntityService = inject(SuperherosEntityService);

  return superherosEntityService.loaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        superherosEntityService.getAll();
      }
    }),
    filter((loaded) => !!loaded),
    first()
  );
};
