import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Superhero, SuperheroPower } from './models';
import { sorterByName } from '../utitlities/sorter';

const entityMetadata: EntityMetadataMap = {
  Superhero: {
    entityName: 'Superhero',
    selectId: (superhero: Superhero) => superhero.id,
    sortComparer: sorterByName,
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
  SuperheroPower: {
    entityName: 'SuperheroPower',
    selectId: (superheroPower: SuperheroPower) => superheroPower.powerId,
    sortComparer: sorterByName,
  },
};

const pluralNames = {
  Superhero: 'Superheroes',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
