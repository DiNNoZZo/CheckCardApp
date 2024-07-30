import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import { apiErrorHandler } from '../middlewares/apiErrorHandler';
import router from '../router/index.router';
import cors from 'cors';

const { feHostDomain, fePort } = config;

const app = express();

// [CR] je nutný bodyparser?
app.use(express.json());
app.use(bodyParser.json());

app.use(
  cors({
    origin: `http://${feHostDomain}:${fePort}`,
    credentials: true,
  })
);

app.use('/api', router);
app.use(apiErrorHandler);

export default app;
