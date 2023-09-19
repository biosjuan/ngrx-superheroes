import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, first, filter } from 'rxjs/operators';
import { SuperheroPowerEntityService } from './superhero-power-entity.service';

export const superheroPowerResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const sperheroPowerEntityService = inject(SuperheroPowerEntityService);
  sperheroPowerEntityService.getAllSuperheroPowers();
  return of(true);
};
