import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Superhero, SuperheroPower } from './models';

const entityMetadata: EntityMetadataMap = {
  Superhero: {
    entityName: 'Superhero',
    selectId: (superhero: Superhero) => superhero.id,
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
  SuperheroPower: {
    entityName: 'SuperheroPower',
    selectId: (superheroPower: SuperheroPower) => superheroPower.powerId,
  },
};

const pluralNames = {
  Superhero: 'Superheroes',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
