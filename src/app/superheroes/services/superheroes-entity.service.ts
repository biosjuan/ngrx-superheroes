import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Superhero } from '../models';

@Injectable()
export class SuperheroesEntityService extends EntityCollectionServiceBase<Superhero> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Superhero', serviceElementsFactory);
  }
}
