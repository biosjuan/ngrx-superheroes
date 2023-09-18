import * as express from 'express';
import { Application } from 'express';
import { getAllHeros } from './get-courses.route';
import { getPower } from './get-power';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.route('/nc/superheroes').get(getAllHeros);
app.route('/api/superheropower/:powerIds').get(getPower);

const httpServer: any = app.listen(3001, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
