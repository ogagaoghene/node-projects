const express = require("express");
const app = express();
const port = process.env.port || 3001;

app.get("/", function (req, res) {
  console.log("Request made");
});

app.listen(port, function (req, res) {
  console.log("The server is listening for request on port " + port);
});
