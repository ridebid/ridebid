# ridebid

Ridesharing powered by SmartCare/Here/Ebay

### build development bundle

```
npm run bulid-dev
```

### start server

```
npm start
```
---
## ROUTES
### GET vehicles 
gets all the vehicles the user in a json object 

### GET vehicle/info
    {  
    "id": "36ab27d0-fd9d-4455-823a-ce30af709ffc",
      "make": "TESLA",
      "model": "Model S",
      "year": 2014
    }
### GET vehicle/location
  {
    "data": {
      "distance": 10850.8203125
    },
    "age": "2019-07-21T11:50:56.609Z",
    "unitSystem": "metric"
  }
### GET vehicle/odometer
  {
  "data": {
    "latitude": 37.360660552978516,
    "longitude": -108.13247680664062
  },
  "age": "2019-07-21T11:57:29.215Z"
}

### GET vehicles
return is an array. 0 houses the first car with 3 objects (info, location, and odometer);
  0: Object {info: Object, location: Object, odometer: Object}
  ---
  info: Object {id: "3d9558a6-b0bb-4270-b5c6-19edcde2787c", make: "TESLA", model: "Model 3", year: 2017}
  location: Object {data: {latitude: 37.55, longtitude: 37.55}, age: Sun Jul 21 2019 04:04:32 GMT-0700 (Pacific Dayligh…} // age might be an Date obj...
  odometer: Object {data: {distance: 1222067}, age: Sun Jul 21 2019 04:04:32 GMT-0700 (Pacific Dayligh…, unitSystem: "metric"}
 