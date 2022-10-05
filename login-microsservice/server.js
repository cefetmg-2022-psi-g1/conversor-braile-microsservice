require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const helmet = require('helmet')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express();
const morgan = require('mongoose-morgan');
var consign = require('consign')
var server = null

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

consign()
    .include('src/controllers')
    .then('src/models')
    .then('src/routes')
    .into(app)

app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(express.static('../content'));
app.use(bodyParser.json());

//creendeciais
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

function start(api, callback) {
  app.use(morgan("dev")); 
  app.use(helmet());
  app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'; frame-ancestors *"
    );
    next();
  });
  app.use((err, req, res, next) => {
    callback(new Error("Something went wrong!, err:" + err), null);
    res.status(500).send("Something went wrong!");
  });

  api(app);
  
  server = app.listen(3001, () => {
    const host = server.address().address;
    const port = server.address().port;
  })
}

function stop() {
  if (server) server.close();
  return true;
}

module.exports = { start, stop };


