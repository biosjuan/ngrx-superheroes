import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Superhero, SuperheroPower } from '../models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuperheroListComponent {
  dataSource = new MatTableDataSource<Superhero>([]);
  superheroPowers: string[];
  superheroId: number;
  @Input() set superheroes(value: Superhero[] | null) {
    this.dataSource.data = value ?? [];
  }

  @Input() set superheroPowersInput(value: SuperheroPower[] | null) {
    this.superheroPowers = value ? value.map((sp) => sp.name) : [];
  }

  @Output() getPowers = new EventEmitter<number[]>();
  displayedColumns: string[] = ['name', 'alias', 'team', 'universe', 'powers'];

  onGetPowers(powers: number[], id: number): void {
    this.getPowers.emit(powers);
    this.superheroId = id;
  }
}
