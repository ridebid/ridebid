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
  scope: ['required:read_vehicle_info','required:read_location','read_odometer', 'control_security', 'control_security:unlock', 'control_security:lock'],
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
//bmws are bad. teslas good.
app.get('/vehicle/:type', function (req, res) {
  return smartcar.getVehicleIds(access.accessToken)
    .then(function (data) {
      // the list of vehicle ids
      return data.vehicles;
    })
    .then(function (vehicleIds) {
      // instantiate the first vehicle in the vehicle id list
      const vehicle = new smartcar.Vehicle(vehicleIds[0], access.accessToken);
      // vehicle.unlock();
      const vehicleCalls = ['location','info', 'odometer'];
      if (vehicleCalls.includes(req.params.type)) {
        return vehicle[req.params.type]();
      } else {
        throw new Error('This aint a valid req param');
      }
    })
    .then(function (specificVehicleData) {
      console.log(specificVehicleData);
      res.json(specificVehicleData);
    })
    .catch((error) => {
      console.log(error);
    });
});
/**
 * summary: after /login, -> this route will return storage with all the cars that you control.
 */
app.get('/vehiclevin', (req, res) => {

})
app.get('/vehicles', (req, res) => {
  const { accessToken } = access;
  let promisedCarData = [];
  return smartcar.getVehicleIds(accessToken)
    .then((data) => {
      return data.vehicles;
    })
    .then((vehicleIds) => {
      const promisedCarsData = [];
      vehicleIds.forEach((vehicleId) => {
        const vehicle = new smartcar.Vehicle(vehicleId, accessToken)
        promisedCarData = [vehicle.info(), vehicle.location(), vehicle.odometer()]
        promisedCarsData.push(Promise.all(promisedCarData));
      })
      return promisedCarsData;
    })
    .then((promisedCarsData) => {
      const metaLabel = ['info', 'location', 'odometer']
      const storage = [];
      promisedCarsData.forEach((promisedCarData) => {
        promisedCarData.then((carData) => {
          const carFullData = {};
          carData.reduce((accum, carDatum, key) => {
            accum[ metaLabel[ key ] ] = carDatum;
            return accum;
          }, carFullData)
          return carFullData;
        })
        .then((carFullData) => {
          storage.push(carFullData);
          if (storage.length === promisedCarsData.length) {
            console.log(storage); //storage will have info of every car.
            res.json(storage).redirect();
/* 0: Object {info: Object, location: Object, odometer: Object}
info: Object {id: "3d9558a6-b0bb-4270-b5c6-19edcde2787c", make: "TESLA", model: "Model 3", year: 2017}
location: Object {data: {latitude: 37.55, longtitude: 37.55}, age: Sun Jul 21 2019 04:04:32 GMT-0700 (Pacific Dayligh…} // age might be an Date obj...
odometer: Object {data: {distance: 1222067}, age: Sun Jul 21 2019 04:04:32 GMT-0700 (Pacific Dayligh…, unitSystem: "metric"}
....
*/
          }
        })
      })
      return storage;
    })
});

app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));
