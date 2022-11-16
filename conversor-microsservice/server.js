const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const app = express();
var consign = require('consign')
var server = null

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

consign()
    .include('src/controllers')
    .then('src/models')
    .then('src/routes')
    .into(app)

app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(express.static('../content'));
app.use(bodyParser.json());

function start(api, callback) {
  app.use(morgan("dev")); 
  app.use(helmet());
  app.use((err, req, res, next) => {
    callback(new Error("Something went wrong!, err:" + err), null);
    res.status(500).send("Something went wrong!");
  });
  app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      "default-src *; font-src *; img-src *; script-src *; style-src *; frame-src *; frame-ancestors *"
    );
    next();
  });

  api(app);

  server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
  })
}

function stop() {
  if (server) server.close();
  return true;
}

module.exports = { start, stop };