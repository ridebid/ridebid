const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const smartcar = require('smartcar');

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('tiny'));

app.get('/api', (req, res) => {
  res.send('Hello Node');
});

const client = new smartcar.AuthClient({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
  scope: ['required:read_vehicle_info'],
  testMode: true,
});

// global variable to save our accessToken
let access;

app.get('/login', function (req, res) {
  const link = client.getAuthUrl();
  res.redirect(link);
});

app.get('/exchange', function (req, res) {
  const code = req.query.code;
  console.log(code);
  return client.exchangeCode(code)
    .then(function (_access) {
      // in a production app you'll want to store this in some kind of persistent storage
      access = _access;

      res.sendStatus(200);
    });
});

app.get('/vehicle', function (req, res) {
  return smartcar.getVehicleIds(access.accessToken)
    .then(function (data) {
      // the list of vehicle ids
      return data.vehicles;
    })
    .then(function (vehicleIds) {
      // instantiate the first vehicle in the vehicle id list
      const vehicle = new smartcar.Vehicle(vehicleIds[0], access.accessToken);
      // vehicle.unlock();
      return vehicle.info();
    })
    .then(function (info) {
      console.log(info);

      // {
      //   "id": "36ab27d0-fd9d-4455-823a-ce30af709ffc",
      //   "make": "TESLA",
      //   "model": "Model S",
      //   "year": 2014
      // }

      res.json(info);
    });
});

app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));
