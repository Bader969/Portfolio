const liveServer = require("live-server");

const params = {
  port: 5501, // Change to your preferred port
  host: "localhost", // or "127.0.0.1"
  root: "./", // The base directory
  open: true,
  file: "index.html",
  wait: 500,
  logLevel: 2,
};

liveServer.start(params);
