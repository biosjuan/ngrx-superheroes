import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SuperheroPowerEntityService } from '../services/superhero-power-entity.service';
import { Observable } from 'rxjs';
import { SuperheroPower } from '../models';

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
    private superheroPowerEntityService: SuperheroPowerEntityService
  ) {}

  ngOnInit(): void {
    this.superheroPowers = this.superheroPowerEntityService.entities$;
  }
}
