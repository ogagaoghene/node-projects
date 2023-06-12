const http = require("http");
const fs = require('fs');
const port = process.env.port || 3001
const app = http.createServer((req, res) => {
   console.log(req.url, req.method);

    fs.readFile('./views/about.html', (err, data) => {
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