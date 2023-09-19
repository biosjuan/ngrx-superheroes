import { Request, Response } from 'express';
import { SUPERHERO_POWERS } from './db-data';

export function updatePower(req: Request, res: Response) {
  console.log('Updating super power ...');

  const id = Number(req.params['id']),
    changes = req.body;

  SUPERHERO_POWERS[id] = {
    ...SUPERHERO_POWERS[id],
    ...changes,
  };
  setTimeout(() => {
    res.status(200).json(SUPERHERO_POWERS[id]);
  }, 1000);
}
