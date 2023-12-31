const express = require('express');
const app = express();
const port = process.env.port || 3001;

app.get('/', function(req, res) {
    // res.send('<p>Home Page</p>');
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', function(req, res) {
    // res.send('<p>About Page</p>');
    res.sendFile('./views/about.html', {root: __dirname});
});

app.get('/about-us', function(req, res) {
    res.sendFile('./views/about.html', {root: __dirname});
});

app.use(function(req, res) {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});

app.listen(port, function() {
    console.log(`Server is listening on ${port}`);
});



