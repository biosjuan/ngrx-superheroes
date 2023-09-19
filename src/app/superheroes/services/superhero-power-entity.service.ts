import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { SuperheroPower } from '../models';
import { Observable, forkJoin, map } from 'rxjs';

interface tem {
  payload: SuperheroPower[];
}

@Injectable()
export class SuperheroPowerEntityService extends EntityCollectionServiceBase<SuperheroPower> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('SuperheroPower', serviceElementsFactory);
  }

  private allLoaded = false;

  // Define a method to set superheroPowerIds
  setAllLoaded(): void {
    this.allLoaded = true;
  }

  // Define a method to get superheroPowerIds
  getAllLoaded(): boolean {
    return this.allLoaded;
  }
}
