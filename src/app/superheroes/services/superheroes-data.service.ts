import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Superhero } from '../models';

@Injectable()
export class SuperheroesDataService extends DefaultDataService<Superhero> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('courses', http, httpUrlGenerator);
  }

  override getAll(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(`/nc/superheroes`);
  }
}
