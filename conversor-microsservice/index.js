const api = require("./conversor");
const server = require("./server");
server.start(api, (err, app) => {
  console.log("just started");
});