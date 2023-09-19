import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() deleteSuperheroPower = new EventEmitter<SuperheroPower>();
  @Output() editSuperheroPower = new EventEmitter<SuperheroPower>();
  @Output() addSuperheroPower = new EventEmitter<void>();

  constructor(
    private superheroPowerEntityService: SuperheroPowerEntityService
  ) {}

  onDelete(superheroPower: SuperheroPower): void {
    this.deleteSuperheroPower.emit(superheroPower);
  }

  onEdit(superheroPower: SuperheroPower): void {
    this.editSuperheroPower.emit(superheroPower);
  }

  onAddPower(): void {
    this.addSuperheroPower.emit();
  }
}
