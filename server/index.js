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
  const term = req.params.term;
  request(`smartcarAPI`, (err, response, body) => {
    if (err) {
      console.log(err);
    } else {
      res.send(body);
    }
  })
});

app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));
