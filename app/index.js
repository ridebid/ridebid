'use strict';
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, './.env')});
const cors = require('cors');
const express = require('express');
const smartcar = require('smartcar');
const axios = require('axios');

const app = express()
  .use(cors());
const port = 8000;

const client = new smartcar.AuthClient({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
  scope: ['required:read_vehicle_info'],
  testMode: true,
});

// global variable to save our accessToken
let access;

app.get('/login', function(req, res) {
  const link = client.getAuthUrl();
  res.redirect(link);
});

app.get('/exchange', function(req, res) {
  const code = req.query.code;
  console.log(code);
  return client.exchangeCode(code)
    .then(function(_access) {
      // in a production app you'll want to store this in some kind of persistent storage
      access = _access;

      res.sendStatus(200);
    });
});

app.put('/mario', (req, res) => {
  axios.get('/exchange').then((response) => {
    console.log(response, '!!!!');
    res.send(response);
  });
});

app.get('/vehicle', function(req, res) {
  return smartcar.getVehicleIds(access.accessToken)
    .then(function(data) {
      // the list of vehicle ids
      return data.vehicles;
    })
    .then(function(vehicleIds) {
      // instantiate the first vehicle in the vehicle id list
      const vehicle = new smartcar.Vehicle(vehicleIds[0], access.accessToken);
      // vehicle.unlock();
      return vehicle.info();
    })
    .then(function(info) {
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


app.listen(port, () => console.log(`Listening on port ${port}`));
