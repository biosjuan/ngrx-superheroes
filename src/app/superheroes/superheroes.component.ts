import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SuperheroesEntityService } from './services/superheroes-entity.service';
import { Observable, map, of, switchMap } from 'rxjs';
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
  superheroPowers$: Observable<SuperheroPower[]>;

  constructor(
    private superherosEntityService: SuperheroesEntityService,
    private superheroPowerEntityService: SuperheroPowerEntityService
  ) {}

  ngOnInit(): void {
    this.superheros$ = this.superherosEntityService.entities$;
  }

  getPowers(powersIds: number[]): void {
    const powerIdsQueryParam = powersIds.join(',');

    // Check if the data is already in the store
    const powersInStore$ = this.superheroPowerEntityService.entities$.pipe(
      // Filter the data based on the powerIds
      map((powers) =>
        powers.filter((power) => powersIds.includes(power.powerId))
      )
    );

    this.superheroPowers$ = powersInStore$.pipe(
      // If data is already in the store, return it; otherwise, make the HTTP request
      switchMap((powersInStore) => {
        if (powersInStore.length > 0) {
          return of(powersInStore);
        } else {
          return this.superheroPowerEntityService.getWithQuery({
            powerIds: powerIdsQueryParam,
          });
        }
      })
    );
  }
}
