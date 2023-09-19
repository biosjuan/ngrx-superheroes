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
  private getAllCalled = false;
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('SuperheroPower', serviceElementsFactory);
  }

  getAllSuperheroPowers(): void {
    if (!this.getAllCalled) {
      super.getAll();
      this.getAllCalled = true;
    }
  }

  resetGetAllFlag(): void {
    this.getAllCalled = false;
  }
}
