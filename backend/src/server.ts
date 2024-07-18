import app from './config/express';
import config from './config/config';

const { apiPort, apiHostDomain } = config;

const start = async () => {
  app.listen(apiPort, () => {
    console.log(`App listening on http://${apiHostDomain}:${apiPort}`);
  });
};

start();
