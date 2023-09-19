import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SuperheroPower } from '../../models';
import { SuperheroPowerEntityService } from '../../services/superhero-power-entity.service';

@Component({
  selector: 'app-superhero-power-list',
  templateUrl: './superhero-power-list.component.html',
  styleUrls: ['./superhero-power-list.component.css'],
})
export class SuperheroPowerListComponent {
  displayedColumns: string[] = ['name', 'description', 'edit', 'delete'];
  dataSource = new MatTableDataSource<SuperheroPower>([]);
  itemSize = 5;

  @Input() set powers(value: SuperheroPower[] | null) {
    this.dataSource.data = value ?? [];
  }

  constructor(
    private superheroPowerEntityService: SuperheroPowerEntityService
  ) {}
  onDelete(superheroPower: SuperheroPower): void {
    this.superheroPowerEntityService
      .delete(superheroPower)
      .subscribe((res) => console.log(res));
  }
}
