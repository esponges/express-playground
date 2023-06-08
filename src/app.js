const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const redis = require('redis');

const client = redis.createClient();

client.on('error', (err) => {
  console.log('Error ' + err);
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

app.use(bodyParser.json());

const cache = (req, res, next) => {
  const { id } = req.params;
  console.log(`Checking cache for user ${id}`);

  try {
    client.get(id, (err, data) => {
      if (err) console.log(err);
      else if (data != null) {
        res.send(`Username for ${id} is ${data}`);
      } else {
        next();
      }
    });
  } catch (err) {
    console.log('Redis error: ', err);
    // next();
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    const final_resp = data.username;
    res.send(final_resp);
  } catch (err) {
    res.send(err.message);
  }
};

app.get('/post/:id', cache, getUser);

app.listen(port, () => {
  console.log(`Server up and running at ${port}`);
});
