import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SuperheroPower } from '../models';

interface SuperheroPowerResponseRecord {
  payload: any;
}

@Injectable()
export class SuperheroPowerDataService extends DefaultDataService<SuperheroPower> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('SuperheroPower', http, httpUrlGenerator);
  }

  override getById(powerId: number): Observable<SuperheroPower> {
    return this.http
      .get<SuperheroPowerResponseRecord>(`/api/superheropower/${powerId}`)
      .pipe(map((res) => res.payload));
  }
}
