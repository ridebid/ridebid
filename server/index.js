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

app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));
