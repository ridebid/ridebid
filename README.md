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