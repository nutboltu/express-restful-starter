import bodyParser from 'body-parser';
import express from 'express';
import * as logger from 'winston';

import config from 'config';
import expressValidator from 'middleware/validators';
import route from 'middleware/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator);
app.use(route.allowCrossDomain);

app.use(`/api/${config.version}`, route.router);

app.listen(config.port, () => {
  logger.info('Listening on port %d', config.port);
});


export default app;
