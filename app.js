const express = require('express');
const app = express();
const port = process.env.port || 3001;

app.get('/', function(req, res) {
    res.send('<p>Home Page</p>');
});

app.get('/about', function(req, res) {
    res.send('<p>About Page</p>');
});

app.get('/service', function(req, res) {
    res.send('<p>Services Page</p>');
});

app.listen(port, function() {
    console.log(`Server is listening on ${port}`);
});



