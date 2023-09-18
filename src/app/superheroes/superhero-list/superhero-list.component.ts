import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Superhero } from '../models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuperheroListComponent {
  dataSource = new MatTableDataSource<Superhero>([]);
  @Input() set superheroes(value: Superhero[] | null) {
    this.dataSource.data = value ?? [];
  }
  @Output() getPowers = new EventEmitter<number[]>();
  displayedColumns: string[] = ['name', 'alias', 'team', 'universe', 'powers'];

  onGetPowers(powers: number[]): void {
    this.getPowers.emit(powers);
  }
}
