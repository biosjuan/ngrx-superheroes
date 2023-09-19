import { Request, Response } from 'express';
import { SUPERHERO_POWERS } from './db-data';

export function deletePower(req: Request, res: Response) {
  console.log('Deleting superpower...');
  const id = Number(req.params['powerId']);

  console.log(SUPERHERO_POWERS[id]);

  delete SUPERHERO_POWERS[id];
  setTimeout(() => {
    res.status(200).json(SUPERHERO_POWERS[id]);
  }, 1000);
}
