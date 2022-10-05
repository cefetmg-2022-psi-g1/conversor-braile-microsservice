const api = require("./login");
const server = require("./server");
server.start(api, (err, app) => {
  console.log("just started");
});