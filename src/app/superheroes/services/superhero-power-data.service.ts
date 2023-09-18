import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SuperheroPower } from '../models';

@Injectable()
export class SuperheroPowerDataService extends DefaultDataService<SuperheroPower> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('SuperheroPower', http, httpUrlGenerator);
  }
}
