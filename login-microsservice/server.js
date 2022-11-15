const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const path = require('path')
const mongoose = require('mongoose')
const app = express();
var consign = require('consign')
var server = null
const senhabd = process.env.MONGODBSENHA
const uri = "mongodb+srv://2braile:"+ senhabd +"@2braile.v8tfqlo.mongodb.net/?retryWrites=true&w=majority"

 mongoose.connect( uri, {
  "auth": { "authSource": "admin" },
    "user": "2braile",
    "pass": "senhaManeiraDoBancoCavalo"
 });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

consign()
    .include('src/controllers')
    .then('src/models/dao')
    .then('src/routes')
    .into(app)

app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(express.static('../content'));
app.use(bodyParser.json());

function start(api, callback) {
  app.use(morgan("dev")); 
  app.use(helmet());
  app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      "default-src *; font-src *; img-src *; script-src *; style-src * 'unsafe-inline'; frame-src *; frame-ancestors *"
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