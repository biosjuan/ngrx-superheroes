import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SuperheroesEntityService } from './services/superheroes-entity.service';
import { Observable, map, of } from 'rxjs';
import { Superhero, SuperheroPower } from './models';
import { SuperheroPowerEntityService } from './services/superhero-power-entity.service';

@Component({
  selector: 'app-superheros',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuperherosComponent implements OnInit {
  superheros$: Observable<Superhero[]>;
  powers$: Observable<SuperheroPower>;

  constructor(
    private superherosEntityService: SuperheroesEntityService,
    private superheroPowerEntityService: SuperheroPowerEntityService
  ) {}
  ngOnInit(): void {
    this.superheros$ = this.superherosEntityService.entities$;
  }

  getPowers(powersIds: number[]): void {
    this.powers$ = this.superheroPowerEntityService.getByKey(powersIds);
  }
}
