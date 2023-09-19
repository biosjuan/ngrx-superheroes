import * as express from 'express';
import { Application } from 'express';
import { getAllHeros } from './get-superheros.route';
import { getPower, getPowerList } from './get-power';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.route('/nc/superheroes').get(getAllHeros);
app.route('/api/superheropowers').get(getPower);
app.route('/api/superheropower/list').get(getPowerList);

const httpServer: any = app.listen(3001, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
