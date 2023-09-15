import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperherosComponent } from './superheroes.component';
import { RouterModule, Routes } from '@angular/router';
import { SuperherosEntityService } from './services/superheros-entity.service';
import { EntityDataModule } from '@ngrx/data';
import { superherosResolver } from './services/superheros.resolvers';
import { entityConfig } from './entity-metadata';

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
  providers: [SuperherosEntityService],
})
export class SuperherosModule {}
