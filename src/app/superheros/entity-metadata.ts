import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Superhero } from './models';

const entityMetadata: EntityMetadataMap = {
  Superhero: {
    entityName: 'Superhero',
    selectId: (superhero: Superhero) => superhero.id,
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
};

const pluralNames = {
  Superhero: 'Superheroes',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
