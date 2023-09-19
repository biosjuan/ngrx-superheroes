import { Request, Response } from 'express';
import { SUPERHERO_POWERS, SuperheroPower } from './db-data';

export let powerKeyCounter = 23;

export function createCourse(req: Request, res: Response) {
  console.log('Creating new course ...');

  const newPower = req.body;

  const newSuperPower: SuperheroPower = {
    powerId: powerKeyCounter,
    seqNo: powerKeyCounter,
    ...newPower,
  };

  SUPERHERO_POWERS[newSuperPower.powerId] = newSuperPower;
  powerKeyCounter += 1;

  setTimeout(() => {
    res.status(200).json(SUPERHERO_POWERS[newSuperPower.powerId]);
  }, 2000);
}
