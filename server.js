import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import expressSession from 'express-session';
import * as logger from 'winston';

import config from 'config';
import expressValidator from 'utilities/validators';
import Authenticator from 'utilities/authentication';
import route from 'routes';

const app = express();
const authenticator = new Authenticator();

app.use(cookieParser(config.sessionSecret));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressSession({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: config.sessionMaxAge,
  },
}));
app.use(authenticator.initialize());
app.use(authenticator.session());
app.use(expressValidator);
app.use(route.allowCrossDomain);
app.use('/api', route.router);

app.listen(config.port, () => {
  logger.info('Listening on port %d', config.port);
});


export default app;
