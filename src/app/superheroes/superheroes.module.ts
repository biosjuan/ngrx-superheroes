import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperherosComponent } from './superheroes.component';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroesEntityService } from './services/superheroes-entity.service';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { superherosResolver } from './services/superheroes.resolvers';
import { entityConfig } from './entity-metadata';
import { SuperheroesDataService } from './services/superheroes-data.service';

export const superherosRoutes: Routes = [
  {
    path: '',
    resolve: { superheroes: superherosResolver },
    component: SuperherosComponent,
  },
];

@NgModule({
  declarations: [SuperherosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(superherosRoutes),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [SuperheroesEntityService, SuperheroesDataService],
})
export class SuperherosModule {
  constructor(
    private entityDataService: EntityDataService,
    private superheroesDataService: SuperheroesDataService
  ) {
    entityDataService.registerService('Superhero', superheroesDataService);
  }
}
