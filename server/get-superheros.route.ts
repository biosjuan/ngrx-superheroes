import { Request, Response } from 'express';
import { SUPERHEROES } from './db-data';

export function getAllHeros(req: Request, res: Response) {
  console.log('Retrieving superheroes data ...');
  const superheroes = Object.values(SUPERHEROES);
  setTimeout(() => {
    res.status(200).json(superheroes);
  }, 1000);
}
