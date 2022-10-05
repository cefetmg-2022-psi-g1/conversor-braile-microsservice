const api = require("./2braile");
const server = require("./server");
server.start(api, (err, app) => {
  console.log("just started");
});