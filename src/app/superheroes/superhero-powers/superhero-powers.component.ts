import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SuperheroPowerEntityService } from '../services/superhero-power-entity.service';
import { Observable } from 'rxjs';
import { SuperheroPower } from '../models';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SuperheroPowerDialogComponent } from './superhero-dialog/superhero-power-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-superhero-powers',
  templateUrl: './superhero-powers.component.html',
  styleUrls: ['./superhero-powers.component.css'],
})
export class SuperheroPowersComponent implements OnInit {
  superheroPowers: Observable<SuperheroPower[]>;

  constructor(
    private superheroPowerEntityService: SuperheroPowerEntityService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.superheroPowers = this.superheroPowerEntityService.entities$;
  }

  onDelete(superheroPower: SuperheroPower): void {
    this.superheroPowerEntityService
      .delete(superheroPower)
      .subscribe((res) => console.log(res));
  }

  onEdit(superheroPower: SuperheroPower): void {
    const dialogConfig = this.dialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Edit Super Power',
      superheroPower,
      mode: 'update',
    };

    this.dialog.open(SuperheroPowerDialogComponent, dialogConfig);
  }

  onAddSuperPower(): void {
    const dialogConfig = this.dialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Add Super Power',
      mode: 'create',
    };

    this.dialog.open(SuperheroPowerDialogComponent, dialogConfig);
  }

  dialogConfig(): MatDialogConfig<any> {
    const dialogConfg = new MatDialogConfig();
    dialogConfg.disableClose = true;
    dialogConfg.autoFocus = true;
    dialogConfg.width = '400px';

    return dialogConfg;
  }
}
