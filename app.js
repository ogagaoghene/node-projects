const express = require("express");
const app = express();
const port = process.env.port || 3001;

app.listen(port, function(req, res) {
    console.log('Server is listening on ' + port);
});

app.get("/", function (req, res) {
    res.send('<p>Home Page</p>');
});


