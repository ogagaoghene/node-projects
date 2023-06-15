const http = require("http");
const fs = require('fs');
const port = process.env.port || 3001
const app = http.createServer((req, res) => {
   console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 400;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }   
    });
});

app.listen(port, 'localhost', () => {
    console.log("Listening for requests on port " + port);
});