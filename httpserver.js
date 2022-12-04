const http = require('http');
const port = process.env.PORT || 3000;


const server = http.createServer( (req,res) => { 
    res.statusCode = 200;
    res.setHeader = ('Content-type','text/html');
    res.end('<h1>runnning success</h1>');
});

server.listen(port,() => { 
    console.log(`servr runnig on port ${port}`)
});