const express = require('express');
const app = express();
const port = process.env.port || 3001;

app.listen(port);

app.get('/', function(req, res) {
    res.send('NodeJs setup');
})