import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SuperheroesEntityService } from './services/superheroes-entity.service';
import { Observable } from 'rxjs';
import { Superhero } from './models';

@Component({
  selector: 'app-superheros',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuperherosComponent implements OnInit {
  superheros$: Observable<Superhero[]>;

  constructor(private superherosEntityService: SuperheroesEntityService) {}
  ngOnInit(): void {
    this.superheros$ = this.superherosEntityService.entities$;
  }
}
