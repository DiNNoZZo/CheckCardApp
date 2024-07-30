# Project Overview

email: user@test.com
password: password

To start the backend, just be in the root of the project and run start.sh

```bash
./start.sh
```

To start the frontend, go to the frontend folder and install the dependencies and start the project

```bash
cd ../frontend
npm install

npm run build
npm start
```

## Bug on frontend

Bug: at the first start of the application, the application starts incorrectly for some reason and does not respond. It can be caused by the version of next or the app route approach.

The application just needs to be reloaded and it works as it should

The error only occurs on the development server. When the application is built, everything works fine

<!--
[CR]
- https://github.com/benaktom/vlcko_CheckCardApp
- proč se BE a FE buildí a starují odlišně?
- k čemu je package.json v rootu?
- v BE by se hodilo mít readme a popsat, jakou např verzi node použít a jak to spustit
- bylo by dobré někde popsat env proměnné
- škoda, že neexistuje popis endpointů (ale nebylo povinné)
-->