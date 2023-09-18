import { Request, Response } from 'express';
import { SUPERHERO_POWERS } from './db-data';

export function getPower(req: Request, res: Response) {
  const powerIds = req.params['powerIds'].split(',').map(Number);
  const superpowers = Object.values(SUPERHERO_POWERS).filter((power) =>
    powerIds.includes(power.powerId)
  );

  setTimeout(() => {
    res.status(200).json({ payload: superpowers });
  }, 1000);
}
