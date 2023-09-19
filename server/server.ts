import * as express from 'express';
import { Application } from 'express';
import { getAllHeros } from './get-superheros.route';
import { getPower, getPowerList } from './get-power.route';
import { deletePower } from './delete-power.route';
import { updatePower } from './update-power.route';
import { createCourse } from './add-power.route';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.route('/nc/superheroes').get(getAllHeros);
app.route('/api/superheropowers').get(getPower);
app.route('/api/superheropower/list').get(getPowerList);
app.route('/api/superheropower/:powerId').delete(deletePower);
app.route('/api/superheropower/:powerId').put(updatePower);
app.route('/api/superheropower/').post(createCourse);

const httpServer: any = app.listen(3001, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
