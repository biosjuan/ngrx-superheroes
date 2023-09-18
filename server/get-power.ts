import { Request, Response } from 'express';
import { SUPERHERO_POWERS } from './db-data';

export function getPower(req: Request, res: Response) {
  const queries = req.query;
  const powerIdsParam = queries['powerIds'];
  console.log('Retrieving Selected Powers...', powerIdsParam);
  if (!powerIdsParam) {
    // Handle the case where 'powerIds' query parameter is missing
    res.status(400).json({ error: 'Missing query parameter: powerIds' });
    return;
  }

  const powerIds = (powerIdsParam as string).split(',').map(Number);

  const superpowers = Object.values(SUPERHERO_POWERS).filter((power) =>
    powerIds.includes(power.powerId)
  );
  setTimeout(() => {
    res.status(200).json(superpowers);
  }, 1000);
}
