import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperherosComponent } from './superheroes.component';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroesEntityService } from './services/superheroes-entity.service';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { superherosResolver } from './services/superheroes.resolvers';
import { entityConfig } from './entity-metadata';
import { SuperheroesDataService } from './services/superheroes-data.service';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';
import { MaterialModule } from '../material/material.module';
import { SuperheroPowerEntityService } from './services/superhero-power-entity.service';
import { SuperheroPowerDataService } from './services/superhero-power-data.service';
import { SuperheroPowersComponent } from './superhero-powers/superhero-powers.component';
import { superheroPowerResolver } from './services/superhero-power.resolvers';
import { SuperheroPowerListComponent } from './superhero-powers/superhero-power-list/superhero-power-list.component';
import { SpinnerModule } from '../ui/spinner/spinner.module';
import { SuperheroPowerDialogComponent } from './superhero-powers/superhero-dialog/superhero-power-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

export const superherosRoutes: Routes = [
  {
    path: '',
    resolve: { superheroes: superherosResolver },
    component: SuperherosComponent,
  },
  {
    path: 'superhero-powers',
    resolve: { superheroPowers: superheroPowerResolver },
    component: SuperheroPowersComponent,
  },
];

@NgModule({
  declarations: [
    SuperherosComponent,
    SuperheroListComponent,
    SuperheroPowersComponent,
    SuperheroPowerListComponent,
    SuperheroPowerDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SpinnerModule,
    ReactiveFormsModule,
    RouterModule.forChild(superherosRoutes),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    SuperheroesEntityService,
    SuperheroesDataService,
    SuperheroPowerEntityService,
    SuperheroPowerDataService,
  ],
})
export class SuperherosModule {
  constructor(
    private entityDataService: EntityDataService,
    private superheroesDataService: SuperheroesDataService,
    private superheroPowerDataService: SuperheroPowerDataService
  ) {
    entityDataService.registerService('Superhero', superheroesDataService);
    entityDataService.registerService(
      'SuperheroPower',
      superheroPowerDataService
    );
  }
}
