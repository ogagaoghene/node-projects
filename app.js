const http = require("http");
const port = process.env.port || 3001
const app = http.createServer((req, res) => {
   console.log(req.url, req.method);

   //set Header content type 
   res.setHeader('Content-Type', 'text/plain');
   res.write('NodeJs is good for backend programming');
   res.end();
});

app.listen(port, 'localhost', () => {
    console.log("Listening for requests on port " + port);
});