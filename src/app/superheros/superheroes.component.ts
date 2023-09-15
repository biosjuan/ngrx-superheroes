import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SuperherosEntityService } from './services/superheros-entity.service';
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

  constructor(private superherosEntityService: SuperherosEntityService) {}
  ngOnInit(): void {
    this.superheros$ = this.superherosEntityService.entities$;
    console.log('oninit');
  }
}
