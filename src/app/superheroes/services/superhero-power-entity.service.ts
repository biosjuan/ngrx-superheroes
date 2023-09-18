import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { SuperheroPower } from '../models';
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class SuperheroPowerEntityService extends EntityCollectionServiceBase<SuperheroPower> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('SuperheroPower', serviceElementsFactory);
  }

  // getEntitiesByKeys(keys: number[]): Observable<SuperheroPower[]> {
  //   const observables: Observable<SuperheroPower>[] = keys.map((key) =>
  //     this.getByKey(key)
  //   );
  //   return forkJoin(observables);
  // }
}
